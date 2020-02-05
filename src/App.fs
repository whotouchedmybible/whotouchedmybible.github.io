module App

(**
 The famous Increment/Decrement ported from Elm.
 You can find more info about Elmish architecture and samples at https://elmish.github.io/
*)

open Elmish
open Elmish.React
open Fable.React
open Fable.React.Props

// MODEL

type Model = int

type Msg =
| Increment
| Decrement

let init() : Model = 0

// UPDATE

let update (msg:Msg) (model:Model) =
    match msg with
    | Increment -> model + 1
    | Decrement -> model - 1

// VIEW (rendered with React)

let view (model:Model) dispatch =
    //div [ Class "container" ] [
    //    button [ Class "button is-primary"; OnClick (fun _ -> dispatch Increment) ] [ str "+" ]
    //    div [] [ str (string model) ]
    //    button [ Class "button is-danger"; OnClick (fun _ -> dispatch Decrement) ] [ str "-" ]
    //]
    div [ Class "container" ] [
        nav [ Class "level" ] [
            div [ Class "level-left" ] [
                div [ Class "level-item" ] [
                    p [ Class "subtitle is-5"] [
                        strong [] [ str "WTMB" ]
                    ]
                ]
            ]
            div [ Class "level-right" ] [
                p [ Class "level-item" ] [
                    strong [] [ str "home" ]
                ]
            ]
        ]
        div [ Class "content is-medium"] [
            h1 [] [ str "Genesis" ]
        ]
        div [ Class "content is-medium"] [
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "1" ]
                str "In the beginning God created the Heauen, and the Earth. "
                span [ Class "content is-small has-text-grey-light"] [ str "2" ]
                str "And the earth was without forme, and voyd, and darkenesse was vpon the face of the deepe: and the Spirit of God mooued vpon the face of the waters. "
                span [ Class "content is-small has-text-grey-light"] [ str "3" ]
                str "And God said, Let there be light: and there was light. "
                span [ Class "content is-small has-text-grey-light"] [ str "4" ]
                str "And God saw the light, that it was good: and God diuided the light from the darkenesse. "
                span [ Class "content is-small has-text-grey-light"] [ str "5" ]
                str "And God called the light, Day, and the darknesse he called Night: and the euening and the morning were the first day. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "6" ]
                str "And God said, Let there be a firmament in the midst of the waters: and let it diuide the waters from the waters. "
                span [ Class "content is-small has-text-grey-light"] [ str "7" ]
                str "And God made the firmament; and diuided the waters, which were vnder the firmament, from the waters, which were aboue the firmament: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "8" ]
                str "And God called the firmament, Heauen: and the euening and the morning were the second day. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "9" ]
                str "And God said, Let the waters vnder the heauen be gathered together vnto one place, and let the dry land appeare: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "10" ]
                str "And God called the drie land, Earth, and the gathering together of the waters called hee, Seas: and God saw that it was good. "
                span [ Class "content is-small has-text-grey-light"] [ str "11" ]
                str "And God said, Let the Earth bring foorth grasse, the herbe yeelding seed, and the fruit tree, yeelding fruit after his kinde, whose seed is in it selfe, vpon the earth: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "12" ]
                str "And the earth brought foorth grasse, and herbe yeelding seed after his kinde, and the tree yeelding fruit, whose seed was in it selfe, after his kinde: and God saw that it was good. "
                span [ Class "content is-small has-text-grey-light"] [ str "13" ]
                str "And the euening and the morning were the third day. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "14" ]
                str "And God said, Let there bee lights in the firmament of the heauen, to diuide the day from the night: and let them be for signes and for seasons, and for dayes and yeeres. "
                span [ Class "content is-small has-text-grey-light"] [ str "15" ]
                str "And let them be for lights in the firmament of the heauen, to giue light vpon the earth: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "16" ]
                str "And God made two great lights: the greater light to rule the day, and the lesser light to rule the night: he made the starres also. "
                span [ Class "content is-small has-text-grey-light"] [ str "17" ]
                str "And God set them in the firmament of the heauen, to giue light vpon the earth: "
                span [ Class "content is-small has-text-grey-light"] [ str "18" ]
                str "And to rule ouer the day, and ouer the night, and to diuide the light from the darkenesse: and God saw that it was good. "
                span [ Class "content is-small has-text-grey-light"] [ str "19" ]
                str "And the euening and the morning were the fourth day. "
                span [ Class "content is-small has-text-grey-light"] [ str "20" ]
                str "And God said, Let the waters bring foorth aboundantly the mouing creature that hath life, and foule that may flie aboue the earth in the open firmament of heauen. "
                span [ Class "content is-small has-text-grey-light"] [ str "21" ]
                str "And God created great whales, and euery liuing creature that moueth, which the waters brought forth aboundantly after their kinde, and euery winged foule after his kinde: and God saw that it was good. "
                span [ Class "content is-small has-text-grey-light"] [ str "22" ]
                str "And God blessed them, saying, Be fruitfull, and multiply, and fill the waters in the Seas, and let foule multiply in the earth. "
                span [ Class "content is-small has-text-grey-light"] [ str "23" ]
                str "And the euening and the morning were the fift day. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "24" ]
                str "And God said, Let the earth bring forth the liuing creature after his kinde, cattell, and creeping thing, and beast of the earth after his kinde: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "25" ]
                str "And God made the beast of the earth after his kinde, and cattell after their kinde, and euery thing that creepeth vpon the earth, after his kinde: and God saw that it was good. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "26" ]
                str "And God said, Let vs make man in our Image, after our likenesse: and let them haue dominion ouer the fish of the sea, and ouer the foule of the aire, and ouer the cattell, and ouer all the earth, and ouer euery creeping thing that creepeth vpon the earth. "
                span [ Class "content is-small has-text-grey-light"] [ str "27" ]
                str "So God created man in his owne Image, in the Image of God created hee him; male and female created hee them. "
                span [ Class "content is-small has-text-grey-light"] [ str "28" ]
                str "And God blessed them, and God said vnto them, Be fruitfull, and multiply, and replenish the earth, and subdue it, and haue dominion ouer the fish of the sea, and ouer the foule of the aire, and ouer euery liuing thing that mooueth vpon the earth. "
            ]
            p [ Class "indent" ] [
                span [ Class "content is-small has-text-grey-light"] [ str "29" ]
                str "And God said, Behold, I haue giuen you euery herbe bearing seede, which is vpon the face of all the earth, and euery tree, in the which is the fruit of a tree yeelding seed, to you it shall be for meat: "
                span [ Class "content is-small has-text-grey-light"] [ str "30" ]
                str "And to euery beast of the earth, and to euery foule of the aire, and to euery thing that creepeth vpon the earth, wherein there is life, I haue giuen euery greene herbe for meat: and it was so. "
                span [ Class "content is-small has-text-grey-light"] [ str "31" ]
                str "And God saw euery thing that hee had made: and behold, it was very good. And the euening and the morning were the sixth day."
            ]
        ]
    ]

// App
Program.mkSimple init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.withConsoleTrace
|> Program.run
