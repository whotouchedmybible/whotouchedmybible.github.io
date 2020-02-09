[<AutoOpen>]
module Msgs

type Msg =
    | NightTog of bool
    | MenuToggle of bool
    | CloseLenses
    | Lens of Lenses
    | NextChapter
    | PreviousChapter