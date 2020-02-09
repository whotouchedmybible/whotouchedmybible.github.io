[<AutoOpen>]
module Types

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