[<AutoOpen>]
module Msgs

type Msg =
    | NightTog of bool
    | MenuToggle of bool
    | CloseLenses
    | Lens of Lenses
    | ChangeTranslation of Translation
    | NextChapter
    | PreviousChapter