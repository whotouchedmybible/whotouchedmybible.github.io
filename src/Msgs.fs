[<AutoOpen>]
module Msgs

open Browser

type Msg =
    | NightTog of bool
    | MenuToggle of bool
    | CloseLenses
    | Lens of Lenses
    | TouchStartX of Types.Touch
    | TouchEndX of Types.Touch
    | Swipe
    | ChangeTranslation of Translation
    | ChangeBook of BookOrderMax
    | ChangeChapter of int
    | NextChapter of int
    | PreviousChapter of int

type Effect =
    | Passthru of Msg
    | DoNothing