module App

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props
open Translations
open Browser
open Fable.Import
open Fable.Core
open System

type Model =
    {
        NightMode: bool
        MenuTog: bool
        LensOpt: Lenses option
        PendingX: float
        StartX: int
        StartY: int
        EndX: int
        EndY: int
        Translation: Translation
        Book: BookOrderMax
        Chapter: int
        Verses: int list
    }

let init something =
    {
        NightMode = true
        MenuTog = false
        LensOpt = None
        PendingX = 0.0
        StartX = 0
        StartY = 0
        EndX = 0
        EndY = 0
        Translation = KJV1611
        Book = GenOrderMax
        Chapter = 1
        Verses = []
    }, []

let update (msg:Msg) (model:Model) =
    let swipe =
        //if model.StartX > model.EndX
        //    then Passthru (NextChapter model.Chapter)
        //    else
        //        if model.StartX < model.EndX
        //            then Passthru (PreviousChapter model.Chapter)
        //            else DoNothing
        if model.StartX > model.EndX
        then
            if (model.StartX - model.EndX) > 125
            then
                if (model.StartY - model.EndY) < 20
                then Passthru (NextChapter model.Chapter)
                else DoNothing
            else DoNothing
        else
            if (model.EndX - model.StartX) > 125
            then
                if (model.StartY - model.EndY) < 20
                then Passthru (PreviousChapter model.Chapter)
                else DoNothing
            else DoNothing

    match model, msg with
    | _, MenuToggle bool ->
        {model with MenuTog = bool}, []
    | _, NightTog bool ->
        {model with NightMode = bool; MenuTog = false}, []
    | _, CloseLenses ->
        {model with LensOpt = None}, []
    | _, Lens lens ->
        {model with MenuTog = false; LensOpt = Some lens}, []
    | _, TouchStartX touchCord ->
        {model with StartX = int(touchCord.clientX); StartY = int(touchCord.clientY)}, []
    | _, TouchEndX touchCord ->
        {model with EndX = int(touchCord.clientX); EndY = int(touchCord.clientY)}, [Passthru Swipe]
    | _, Swipe ->
        model, [swipe]
    | _, ChangeTranslation translation ->
        {model with Translation = translation; MenuTog = false}, []
    | _, ChangeBook book ->
        {model with Book = book; Chapter = 1}, []
    | _, ChangeChapter chapter ->
        {model with Chapter = chapter}, []
    | _, NextChapter chapter ->
        let nextChapt =
            if (chapter + 1) > model.Book.MaxChapters then chapter else (chapter + 1)
        let whatBook = if model.Book.Order + 1 = 67 then model.Book else BibleOrderMax.[(model.Book.Order + 1)]
        let nextBook =
            if (chapter + 1) > model.Book.MaxChapters then Passthru (ChangeBook whatBook) else DoNothing
        {model with Chapter = nextChapt; StartX = 0; StartY = 0; EndX = 0; EndY = 0}, [nextBook]
    | _, PreviousChapter chapter ->
        let prevChapt =
            if (chapter - 1) = 0 then chapter else (chapter - 1)
        let whatBook = if model.Book.Order - 1 = 0 then model.Book else BibleOrderMax.[(model.Book.Order - 1)]
        let prevBook =
            if (chapter - 1) = 0 then Passthru (ChangeBook whatBook) else DoNothing
        {model with Chapter = prevChapt; StartX = 0; StartY = 0; EndX = 0; EndY = 0}, [prevBook]

let addressMenu model dispatch =
    let chapterDropDownItem x =
        let ToString int =
            sprintf "%i" int
        a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeChapter x)) ] [ str (ToString x) ]
    div [] [
        span [ Class "hide-mobile" ] [
            span [ Class "columns is-gapless" ] [
                span [ Class "column" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-1" ] [ str (sprintf "%A" model.Book.Title) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook GenOrderMax )) ] [ str "Genesis" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook ExodOrderMax )) ] [ str "Exodus" ]
                            ]
                        ]
                    ]
                ]
                span [ Class "column has-text-centered has-text-bottom" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-3" ] [ str (sprintf "Chapter %i" model.Chapter) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ]
                                (List.map (chapterDropDownItem) [1 .. model.Book.MaxChapters])
                        ]
                    ]
                ]
                span [ Class "column has-text-right has-text-bottom" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-6" ] [ str "verses [all]" ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item" ] [ str "1" ]
                                a [ Class "dropdown-item" ] [ str "2" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
        span [ Class "show-mobile" ] [
            div [ Class "columns" ] [
                div [ Class "column" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-2" ] [ str (sprintf "%A" model.Book.Title) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook GenOrderMax)) ] [ str "Genesis" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook ExodOrderMax)) ] [ str "Exodus" ]
                            ]
                        ]
                    ]
                ]
            ]
            div [ Class "columns is-mobile is-gapless" ] [
                div [ Class "column has-text-bottom" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-3" ] [ str (sprintf "%i" model.Chapter) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeChapter 1)) ] [ str "1" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeChapter 2)) ] [ str "2" ]
                            ]
                        ]
                    ]
                ]
                div [ Class "column has-text-bottom" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-6" ] [ str "verses [all]" ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item" ] [ str "1" ]
                                a [ Class "dropdown-item" ] [ str "2" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]

let view (model:Model) dispatch =
    let boolOpposite bool =
        match bool with
        | true -> false
        | false -> true
    div [Class "has-navbar-fixed-bottom"] [
        div [] [
            nav [ Class "navbar mainColor"; Role "navigation"; AriaLabel "main navigation" ] [
                div [ Class "navbar-brand" ] [
                    a [ Class "navbar-item" ] [
                        img [ Src "WTMBLogo.png" ]
                    ]
                    a [ Role "button"; Class ("navbar-burger burger " + if model.MenuTog = true then "is-active" else ""); AriaLabel "menu"; AriaExpanded false; DataTarget "navbarMain"; OnClick (fun _-> dispatch (MenuToggle (boolOpposite model.MenuTog))) ] [
                        span [ AriaHidden "true" ] []
                        span [ AriaHidden "true" ] []
                        span [ AriaHidden "true" ] []
                    ]
                ]
                div [ Id "navbarMain"; Class ("navbar-menu " + if model.MenuTog = true then "is-active" else "") ] [
                    div [ Class "navbar-end" ] [
                        div [ Class "navbar-item has-dropdown is-hoverable" ] [
                            a [ Class "navbar-link" ] [
                                span [ Class "icon"] [
                                    i [ Class "fas fa-book" ] []
                                ]
                                span [] [ str "Translations" ]
                            ]
                            div [ Class "navbar-dropdown" ] [
                                (match model.Translation with
                                | KJV1611 -> a [ Class "navbar-item has-background-primary"; OnClick (fun _-> dispatch (ChangeTranslation KJV1611)) ] [ span [] [ str "KJV 1611" ] ]
                                | _ -> a [ Class "navbar-item"; OnClick (fun _-> dispatch (ChangeTranslation KJV1611)) ] [ span [] [ str "KJV 1611" ] ]
                                )
                                (match model.Translation with
                                | KJV -> a [ Class "navbar-item has-background-primary"; OnClick (fun _-> dispatch (ChangeTranslation KJV)) ] [ span [] [ str "KJV" ] ]
                                | _ -> a [ Class "navbar-item"; OnClick (fun _-> dispatch (ChangeTranslation KJV)) ] [ span [] [ str "KJV" ] ]
                                )

                            ]
                        ]
                        div [ Class "navbar-item has-dropdown is-hoverable" ] [
                            a [ Class "navbar-link" ] [
                                span [ Class "icon"] [
                                    i [ Class "fas fa-microscope" ] []
                                ]
                                span [] [ str "Lenses" ]
                            ]
                            div [ Class "navbar-dropdown" ] [
                                a [ Class "navbar-item"; OnClick (fun _-> dispatch (Lens CrossReferencesLens)) ] [
                                    span [ Class "icon"] [
                                        i [ Class "fas fa-level-down-alt" ] []
                                    ]
                                    span [] [
                                        str "Cross References"
                                    ]
                                ]
                            ]
                        ]
                        a [ Class "navbar-item"; OnClick (fun _-> dispatch (NightTog (boolOpposite model.NightMode))) ] [
                            match model.NightMode with
                            | true ->
                                span [ Class "icon"] [
                                    i [ Class "fas fa-sun" ] []
                                ]
                                span [] [ str "Day Mode" ]
                            | false ->
                                span [ Class "icon"] [
                                    i [ Class "fas fa-moon" ] []
                                ]
                                span [] [ str "Night Mode" ]
                        ]
                    ]
                ]
            ]
        ]
        div [ Class ("container is-fluid" + if model.NightMode = true then " nightMode" else "") ] [br []]
        div [ Class ("container is-fluid" + if model.NightMode = true then " nightMode" else "") ] [
            div [ Class "container" ] [
                div [] [
                    div [ Class "tile is-ancestor" ] [
                        div [ Class ( "tile is-vertical " + if model.LensOpt = None then "is-12" else "is-6") ] [
                            div [ Class "content is-medium" ] [
                                addressMenu model dispatch
                                br []
                                div [
                                    //OnMouseDown (fun e -> dispatch (TouchStartX e.clientX))
                                    //OnMouseDown (fun e -> dispatch (TouchStartX e.clientX))
                                    OnTouchStart (fun e -> dispatch (TouchStartX e.changedTouches.[0] ))
                                    OnTouchEnd (fun e -> dispatch (TouchEndX e.changedTouches.[0] ))
                                ] [
                                    (match model.Translation with
                                        | KJV1611 -> KJV1611.TableOfContents.books model.Book.Title model.Chapter
                                        | KJV -> KJV.TableOfContents.books model.Book.Title model.Chapter
                                    )
                                ]
                                br []
                                div [ Class "navbar is-fixed-bottom is-mobile is-transparent nightMode" ] [
                                    span [ Class "navbar-end" ] [
                                        div [ Class "navbar-item" ] [
                                            span [ Class "buttons is-centered" ] [
                                                button [ Class "button is-small is-primary"; OnClick (fun _-> dispatch (PreviousChapter model.Chapter)); (if model.Chapter > 1 then Disabled false else Disabled true) ] [
                                                    span [ Class "icon is-small has-text-grey-light" ] [i [ Class "fas fa-chevron-left" ] []]
                                                    span [] [str "Previous Chapter" ]
                                                ]
                                                button [ Class "button is-right is-small is-primary"; OnClick (fun _-> dispatch (NextChapter model.Chapter)) ] [
                                                    span [] [str "Next Chapter" ]
                                                    span [ Class "icon is-small has-text-grey-light" ] [i [ Class "fas fa-chevron-right" ] []]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                                br []
                            ]
                        ]
                        (match model.LensOpt with
                        | Some CrossReferencesLens ->
                            div [ Class "tile is-parent" ] [
                                div [ Class "tile is-child notification mainColor" ] [
                                    div [ Class  "content" ] [
                                        div [ Class "level is-mobile" ] [
                                            div [ Class "level-left" ] [
                                                p [ Class "title" ] [
                                                    str "Cross References"
                                                ]
                                            ]
                                            div [ Class "level-right" ] [
                                                button [ Class "delete"; OnClick (fun _-> dispatch CloseLenses) ] []
                                            ]
                                        ]
                                        div [ Class "content" ] [
                                            div [ Class "columns" ] [
                                                div [ Class "column is-one-fifth" ] [
                                                    p [ Class "subtitle" ] [ str "Gen 1:1" ]
                                                ]
                                                div [ Class "column"] [
                                                    div [ Class "tags" ] [
                                                        span [ Class "tag is-link" ] [ str "Ps 102:25" ]
                                                        span [ Class "tag is-link" ] [ str "Is 40:21" ]
                                                        span [ Class "tag is-link" ] [ str "John 1:1" ]
                                                        span [ Class "tag is-link" ] [ str "Heb 1:10" ]
                                                        span [ Class "tag is-link" ] [ str "Ps 89:11" ]
                                                        span [ Class "tag is-link" ] [ str "Acts 17:24" ]
                                                        span [ Class "tag is-link" ] [ str "Rom 1:20" ]
                                                        span [ Class "tag is-link" ] [ str "Heb 11:3" ]
                                                        span [ Class "tag is-link" ] [ str "Job 38:4" ]
                                                        span [ Class "tag is-link" ] [ str "Is 42:5" ]
                                                        span [ Class "tag is-link" ] [ str "Rev 4:11" ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                        div [ Class "content" ] [
                                            div [ Class "columns" ] [
                                                div [ Class "column is-one-fifth" ] [
                                                    p [ Class "subtitle" ] [ str "Gen 1:2" ]
                                                ]
                                                div [ Class "column"] [
                                                    div [ Class "tags" ] [
                                                        span [ Class "tag is-link" ] [ str "Jer 4:23" ]
                                                        span [ Class "tag is-link" ] [ str "Job 38:9" ]
                                                        span [ Class "tag is-link" ] [ str "Ps 104:30" ]
                                                        span [ Class "tag is-link" ] [ str "Is 40:13" ]
                                                        span [ Class "tag is-link" ] [ str "Duet 32:11" ]
                                                        span [ Class "tag is-link" ] [ str "Is 31:5" ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                        div [ Class "content" ] [
                                            div [ Class "columns" ] [
                                                div [ Class "column is-one-fifth" ] [
                                                    p [ Class "subtitle" ] [ str "Gen 1:3" ]
                                                ]
                                                div [ Class "column"] [
                                                    div [ Class "tags" ] [
                                                        span [ Class "tag is-link" ] [ str "Ps 33:6" ]
                                                        span [ Class "tag is-link" ] [ str "2 Cor 4:6" ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                        div [ Class "content" ] [
                                            div [ Class "columns" ] [
                                                div [ Class "column is-one-fifth" ] [
                                                    p [ Class "subtitle" ] [ str "Gen 1:4" ]
                                                ]
                                                div [ Class "column"] [
                                                    div [ Class "tags" ] [
                                                        span [ Class "tag is-link" ] [ str "Ps 145:9" ]
                                                        span [ Class "tag is-link" ] [ str "Is 45:7" ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                        div [ Class "content" ] [
                                            div [ Class "columns" ] [
                                                div [ Class "column is-one-fifth" ] [
                                                    p [ Class "subtitle" ] [ str "Gen 1:5" ]
                                                ]
                                                div [ Class "column"] [
                                                    div [ Class "tags" ] [
                                                        span [ Class "tag is-link" ] [ str "Ps 74:16" ]
                                                        span [ Class "tag is-link" ] [ str "Ps 65:8" ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        | None ->
                            div [] []
                        )
                    ]
                ]
            ]
        ]
    ]

let perform model effect dispatch =
    match effect with
    | Passthru msg ->
        dispatch msg
    | DoNothing ->
        ()

let nUpdate msg model =
    let (model, fx) = update msg model
    (model, fx |> List.map (perform model))

// App
Program.mkProgram init nUpdate view
|> Program.withReactSynchronous "elmish-app"
|> Program.withConsoleTrace
|> Program.run
