module Translations.KJV.TableOfContents

open Fable.React
open Fable.React.Props
open Translations

let books book chapter =
    div [] [
        match book with
        | Genesis -> KJV.Genesis.genesis chapter
        | Exodus -> KJV.Exodus.exodus chapter
    ]