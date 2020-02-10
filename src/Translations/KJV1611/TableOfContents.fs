module Translations.KJV1611.TableOfContents

open Fable.React
open Fable.React.Props
open Translations

let books book chapter =
    div [] [
        match book with
        | Genesis -> KJV1611.Genesis.genesis chapter
        | Exodus -> KJV1611.Exodus.exodus chapter
    ]