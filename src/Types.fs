[<AutoOpen>]
module Types

open Fable.React.Props

type HTMLAttr =
     | [<CompiledName("data-target")>] DataTarget of string
     | [<CompiledName("aria-label")>] AriaLabel of string
     | [<CompiledName("aria-expanded")>] AriaExpanded of string
     | [<CompiledName("aria-hidden")>] AriaHidden of string
     | [<CompiledName("aria-haspopup")>] AriaHasPopup of string
     | [<CompiledName("aria-controls")>] AriaControls of string
     interface IHTMLProp

type Lenses =
    | CrossReferencesLens

type Translation =
| KJV1611
| KJV

type Title =
| Genesis
| Exodus

type BookOrderMax =
    {
        Title: Title
        Order: int
        MaxChapters: int
    }

//type Address =
//    {
//        Book: Book
//        Chapter: int
//        Verses: int list
//    }

let NoneOrderMax =
    {
        Title = Genesis
        Order = 0
        MaxChapters = 50
    }

let GenOrderMax =
    {
        Title = Genesis
        Order = 1
        MaxChapters = 50
    }

let ExodOrderMax =
    {
        Title = Exodus
        Order = 2
        MaxChapters = 40
    }

let BibleOrderMax =
    [|
        NoneOrderMax
        GenOrderMax
        ExodOrderMax
    |]