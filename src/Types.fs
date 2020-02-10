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

type Book =
| Genesis
| Exodus

type Address =
    {
        Book: Book
        Chapter: int
        Verses: int list
    }