/// Domain model shared between client and server.
namespace ServerCode.Domain

open System

// Json web token type.
type JWT = string

// Login credentials.
type Login =
    { UserName   : string
      Password   : string
      PasswordId : Guid }

    member this.IsValid() =
        not ((this.UserName <> "test"  || this.Password <> "test") &&
             (this.UserName <> "test2" || this.Password <> "test2"))

type UserData =
  { UserName : string
    Token : JWT }

/// The data for each book in /api/wishlist
// DEMO01 - Domain model and validation
type Book =
    { Title : string
      Authors : string
      Link : string }

    static member Empty =
        { Title = null
          Authors = null
          Link = null }

    member this.ValidateTitle() =
        if String.IsNullOrWhiteSpace this.Title then Some "No title was entered" else
        None

    member this.ValidateAuthors() =
        if String.IsNullOrWhiteSpace this.Authors then Some "No author was entered" else
        None
        
    member this.ValidateLink() =
        if String.IsNullOrWhiteSpace this.Link then Some "No link was entered" else
        None

    member this.Validate() =
        this.ValidateTitle() = None &&
        this.ValidateAuthors() = None &&
        this.ValidateLink() = None


/// The logical representation of the data for /api/wishlist
type WishList =
    { UserName : string
      Books : Book list }

    // Create a new WishList.
    static member New userName =
        { UserName = userName
          Books = [] }

    member this.VerifyNewBookIsNotADuplicate book =
        // only compare author and title; ignore url because it is not directly user-visible
        if this.Books |> List.exists (fun b -> (b.Authors,b.Title) = (book.Authors,book.Title)) then
            Some "Your wishlist contains this book already."
        else
            None

    member this.Verify() =
        this.Books 
        |> List.forall (fun book -> book.Validate())

type WishListResetDetails =
    { Time : DateTime }
