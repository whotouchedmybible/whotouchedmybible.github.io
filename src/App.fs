module App

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props
open Translations

type Model =
    {
        NightMode: bool
        MenuTog: bool
        LensOpt: Lenses option
        Translation: Translation
        Book: Book
        Chapter: int
        Verses: int list
    }

let init() : Model =
    {
        NightMode = true
        MenuTog = false
        LensOpt = None
        Translation = KJV1611
        Book = Genesis
        Chapter = 1
        Verses = []
    }

let update (msg:Msg) (model:Model) =
    match model, msg with
    | _, MenuToggle bool ->
        {model with MenuTog = bool}
    | _, NightTog bool ->
        {model with NightMode = bool; MenuTog = false}
    | _, CloseLenses ->
        {model with LensOpt = None}
    | _, Lens lens ->
        {model with MenuTog = false; LensOpt = Some lens}
    | _, ChangeTranslation translation ->
        {model with Translation = translation; MenuTog = false}
    | _, ChangeBook book ->
        {model with Book = book}
    | _, ChangeChapter chapter ->
        {model with Chapter = chapter}
    | _, NextChapter chapter ->
        {model with Chapter = (chapter + 1)}
    | _, PreviousChapter chapter ->
        {model with Chapter = (chapter - 1)}

let addressMenu model dispatch =
    div [] [
        span [ Class "hide-mobile" ] [
            span [ Class "columns is-gapless" ] [
                span [ Class "column" ] [
                    div [ Class "dropdown is-hoverable" ] [
                        div [ Class "dropdown-trigger" ] [
                            div [ Class ""; AriaHasPopup true; AriaControls "dropdown-menu4" ] [
                                span [] [
                                    span [ Class "title is-1" ] [ str (sprintf "%A" model.Book) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook Genesis)) ] [ str "Genesis" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook Exodus)) ] [ str "Exodus" ]
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
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeChapter 1)) ] [ str "1" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeChapter 2)) ] [ str "2" ]
                            ]
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
                                    span [ Class "title is-2" ] [ str (sprintf "%A" model.Book) ]
                                    span [ Class "icon has-text-grey-light" ] [
                                        i [ Class "fas fa-angle-down"; AriaHidden "true" ] []
                                    ]
                                ]
                            ]
                        ]
                        div [ Class "dropdown-menu"; Id "dropdown-menu4"; Role "menu" ] [
                            div [ Class "dropdown-content" ] [
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook Genesis)) ] [ str "Genesis" ]
                                a [ Class "dropdown-item"; OnClick (fun _-> dispatch (ChangeBook Exodus)) ] [ str "Exodus" ]
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
                                div [ OnTouchMove (fun _-> dispatch (NightTog (boolOpposite model.NightMode))) ] [
                                    (match model.Translation with
                                        | KJV1611 -> KJV1611.TableOfContents.books model.Book model.Chapter
                                        | KJV -> KJV.TableOfContents.books model.Book model.Chapter
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

// App
Program.mkSimple init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.withConsoleTrace
|> Program.run
