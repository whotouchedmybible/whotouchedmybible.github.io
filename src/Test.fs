module Test

//#r "../../../bin/lib/net45/FSharp.Data.dll"
open Fable.React
open FSharp.Data
open Fable.SimpleJson
open Fable.React
open Fable.React.Props
open Fable.SimpleHttp

//type Simple = JsonProvider<"../public/KJV/Exodus.json">

//let simple =
//    Simple.Parse("""
//        {
//            "Title": "Exodus",
//            "Chapters": [
//                {
//                    "Chapter": "1",
//                    "Verses": [
//            	        {"Verse": "1", "Text": "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob."},
//            	        {"Verse": "2", "Text": "Reuben, Simeon, Levi, and Judah,"},
//                    ]
//                }
//            ]
//        }
//    """)

//let testThing =
//    for chapter in simple.Chapters do
//        for verse in chapter.Verses do
//            printfn "Chapter %i Verse %i %s" chapter.Chapter verse.Verse verse.Text



//let [<Literal>] FILE_JSON = "Exodus.json"
//let [<Literal>] FILE_JSON_PATH = "../public/KJV/" + FILE_JSON
//type JSonFile = Fable.JsonProvider.Generator<FILE_JSON_PATH>

//let myJSon = JSonFile("""""")

//type Verse =
//    {
//        Verse: int
//        Text: string
//    }

//type Chapter =
//    {
//        Chapter: int
//        Verses: Verse list
//    }

//type Book =
//    {
//        Title: string
//        Chapters: Chapter list
//    }


//let testf3 =
//    JSonFile
////   """
////   {
////	"Title": "Exodus",
////	"Chapters": [{
////		"Chapter": "1",
////		"Verses": [
////			{"Verse": "1", "Text": "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob."},
////			{"Verse": "2", "Text": "Reuben, Simeon, Levi, and Judah,"},
////			{"Verse": "3", "Text": "Issachar, Zebulun, and Benjamin,"},
////			{"Verse": "4", "Text": "Dan, and Naphtali, Gad, and Asher."},
////			{"Verse": "5", "Text": "And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already."},
////			{"Verse": "6", "Text": "And Joseph died, and all his brethren, and all that generation."},
////               {"Verse": "7", "Text": "And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them."},
////			{"Verse": "8", "Text": "Now there arose up a new king over Egypt, which knew not Joseph."},
////               {"Verse": "9", "Text": "And he said unto his people, Behold, the people of the children of Israel are more and mightier than we:"},
////			{"Verse": "10", "Text": "Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land."},
////			{"Verse": "11", "Text": "Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses."},
////			{"Verse": "12", "Text": "But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel."},
////			{"Verse": "13", "Text": "And the Egyptians made the children of Israel to serve with rigour:"},
////               {"Verse": "14", "Text": "And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour."},
////			{"Verse": "15", "Text": "And the king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah:"},
////			{"Verse": "16", "Text": "And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a son, then ye shall kill him: but if it be a daughter, then she shall live."},
////			{"Verse": "17", "Text": "But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive."},
////			{"Verse": "18", "Text": "And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?"},
////			{"Verse": "19", "Text": "And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are lively, and are delivered ere the midwives come in unto them."},
////			{"Verse": "20", "Text": "Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty."},
////               {"Verse": "21", "Text": "And it came to pass, because the midwives feared God, that he made them houses."},
////			{"Verse": "22", "Text": "And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive."}
////		]
////       }]
////}
////   """
//    |> Json.parseAs<Book>

////let testf6 =
////    FILE_JSON_PATH2
////    |> Json.stringify
////    |> Json.parseAs<Book>

//let chapter1 : Chapter = testf3.Chapters.Item(0)

//let verse1 : Verse = chapter1.Verses.Item(1)

let view =
    div [] [
//        div [] [ str (testf3.Title) ]
//        div [] [ str (sprintf "%A" chapter1.Chapter ) ]
//        p [ Class "" ] [
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(1).Verse) ) ]
//            str verse1.Text
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(2).Verse) ) ]
//            str verse1.Text
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(3).Verse) ) ]
//            str verse1.Text
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(4).Verse) ) ]
//            str verse1.Text
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(5).Verse) ) ]
//            str verse1.Text
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str (sprintf "%A" (chapter1.Verses.Item(6).Verse) ) ]
//            str verse1.Text
//        ]
//        p [ Class "" ] [
//            span [ Class "content is-small has-text-grey-light"] [ str "7" ]
//            str "THIS IS THE END OF THE TEST"
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "8" ]
//            str "Now there arose vp a new King ouer Egypt, which knew not Ioseph."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "9" ]
//            str "And he said vnto his people, Behold, the people of the children of Israel are moe and mightier then we."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "10" ]
//            str "Come on, let vs deale wisely with them, lest they multiply, and it come to passe that when there falleth out any warre, they ioyne also vnto our enemies, and fight against vs, and so get them vp out of the land."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "11" ]
//            str "Therefore they did set ouer them task-masters, to afflict them with their burdens: And they built for Pharaoh treasure-cities, Pithom and Raamses."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "12" ]
//            str "But the more they afflicted them, the more they multiplied and grew: and they were grieued because of the children of Israel."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "13" ]
//            str "And the Egyptians made the children of Israel to serue with rigour."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "14" ]
//            str "And they made their liues bitter, with hard bondage, in morter and in bricke, and in all maner of seruice in the fielde: all their seruice wherein they made them serue, was with rigour."
//        ]
//        p [ Class "" ] [
//            span [ Class "content is-small has-text-grey-light"] [ str "15" ]
//            str "And the King of Egypt spake to the Hebrew midwiues, (of which the name of one was Shiphrah, and the name of the other Puah.)"
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "16" ]
//            str "And he said, When ye do the office of a midwife to the Hebrew-women, and see them vpon the stooles, if it be a sonne, then ye shall kill him: but if it be a daughter, then shee shall liue."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "17" ]
//            str "But the midwiues feared God, and did not as the King of Egypt commanded them, but saued the men children aliue."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "18" ]
//            str "And the King of Egypt called for the midwiues, & said vnto them, Why haue ye done this thing, and haue saued the men children aliue?"
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "19" ]
//            str "And the midwiues said vnto Pharaoh, Because the Hebrew women are not as the Egyptian women: for they are liuely, and are deliuered ere the midwiues come in vnto them."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "20" ]
//            str "Therefore God dealt well with the midwiues: and the people multiplied and waxed very mighty."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "21" ]
//            str "And it came to passe, because the midwiues feared God, that hee made them houses."
//            br []
//            span [ Class "content is-small has-text-grey-light"] [ str "22" ]
//            str "And Pharaoh charged all his people, saying, Euery sonne that is borne, yee shall cast into the riuer, and euery daughter ye shall saue aliue."
//        ]
    ]
