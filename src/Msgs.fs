[<AutoOpen>]
module Msgs

type Msg =
    | NightTog of bool
    | MenuToggle of bool
    | CloseLenses
    | Lens of Lenses
    | TouchStartX of float
    | TouchEndX of float
    | ChangeTranslation of Translation
    | ChangeBook of Book
    | ChangeChapter of int
    | NextChapter of int
    | PreviousChapter of int