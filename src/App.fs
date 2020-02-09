module App

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props
open Translations

type HTMLAttr =
     | [<CompiledName("data-target")>] DataTarget of string
     | [<CompiledName("aria-label")>] AriaLabel of string
     | [<CompiledName("aria-expanded")>] AriaExpanded of string
     | [<CompiledName("aria-hidden")>] AriaHidden of string
     interface IHTMLProp

type Address =
    {
        Book: Book
        Chapter: int
        Verses: int list
    }

type Model =
    {
        NightMode: bool
        MenuTog: bool
        LensOpt: Lenses option
        Translation: Translation
    }

let init() : Model =
    {
        NightMode = true
        MenuTog = false
        LensOpt = None
        Translation = KJV1611
    }

let update (msg:Msg) (model:Model) =
    match msg with
    | NightTog bool ->
        {model with NightMode = bool; MenuTog = false}
    | MenuToggle bool ->
        {model with MenuTog = bool}
    | CloseLenses ->
        {model with LensOpt = None}
    | Lens lens ->
        {model with MenuTog = false; LensOpt = Some lens}
    | ChangeTranslation translation ->
        {model with Translation = translation}
    | NextChapter ->
        model
    | PreviousChapter ->
        model


let view (model:Model) dispatch =
    let boolOpposite bool =
        match bool with
        | true -> false
        | false -> true
    div [ Class "" ] [
        div [ Class "" ] [
            nav [ Class "navbar mainColor"; Role "navigation"; AriaLabel "main navigation" ] [
                div [ Class "navbar-brand" ] [
                    a [ Class "navbar-item" ] [
                        img [ Src "WTMBLogo.png" ]
                    ]
                    a [ Role "button"; Class ("navbar-burger burger " + if model.MenuTog = true then "is-active" else ""); AriaLabel "menu"; AriaExpanded "false"; DataTarget "navbarMain"; OnClick (fun _-> dispatch (MenuToggle (boolOpposite model.MenuTog))) ] [
                        span [ AriaHidden "true" ] []
                        span [ AriaHidden "true" ] []
                        span [ AriaHidden "true" ] []
                    ]
                ]
                div [ Id "navbarMain"; Class ("navbar-menu " + if model.MenuTog = true then "is-active" else "") ] [
                    div [ Class "navbar-start" ] [
                        div [ Class "navbar-item has-dropdown is-hoverable" ] [
                            a [ Class "navbar-link" ] [
                                span [ Class "icon"] [
                                    i [ Class "fas fa-book" ] []
                                ]
                                span [] [ str "Translations" ]
                            ]
                            div [ Class "navbar-dropdown" ] [
                                a [ Class "navbar-item"; OnClick (fun _-> dispatch (ChangeTranslation KJV1611)) ] [
                                    span [] [
                                        str "KJV 1611"
                                    ]
                                ]
                                a [ Class "navbar-item"; OnClick (fun _-> dispatch (ChangeTranslation KJV)) ] [
                                    span [] [
                                        str "KJV"
                                    ]
                                ]
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
                div [ Class "container is-fluid" ] [
                    div [ Class "tile is-ancestor" ] [
                        div [ Class ( "tile is-vertical " + if model.LensOpt = None then "is-12" else "is-6") ] [
                            div [ Class "content is-medium"]
                                (match model.Translation with
                                    | KJV1611 -> KJV1611.Genesis.gen1
                                    | KJV -> KJV.Genesis.gen1
                                    | _ -> []
                                )
                            div [ Class "icon is-small has-text-grey-light"] [
                                str "Next Chapter"
                                i [ Class "fas fa-chevron-right" ] []
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
