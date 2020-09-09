import moment, { Moment } from "moment";

export class Post{

    constructor(
        private id: string,
        private image: string,
        private description: string,
        private creationDate: Moment,
        private type: PostType,
        private userId: string
    ){
      switch(this.type){
          case "Event":
              this.type = PostType.EVENT
              break;
          default:
              this.type = PostType.NORMAL
      } 
      this.creationDate = moment(this.creationDate); 
    }

    getId() {return this.id }
    setId(id: string) {this.id = id }

    getImage() {return this.image }
    setImage(image: string) {this.image = image }

    getDescription() {return this.description}
    setDescription(description: string) { this.description = description}

    getCreationDate(){ return this.creationDate}
    setCreationDate(creationDate: Moment){this.creationDate = creationDate}

    getType(){return this.type}
    setType(postType: PostType){this.type = postType}

    getUser(){return this.userId}
    setUser(user: string){this.userId = user}

    static toPostModel(object: any){
        return new Post(object.id, object.image, object.description, object.creation_date, object.type, object.user_id);
    }

    static mapStringToPostType(value: string){
        switch(value){
            case "Event":
               return PostType.EVENT
            default:
                return PostType.NORMAL
        }
    }

}

export enum PostType {
    NORMAL = "Normal",
    EVENT = "Event"
}


export class CreatePostInputDTO{
    public image: string;
    public description: string;
    public type: string;
    public userId: string;
    public creationDate: string;

    constructor(image: string, description: string, type: string, userId: string, creationDate: string = moment().format("YYYY-MM-DD")){
        this.image = image;
        this.description = description;
        this.type = type;
        this.userId = userId;
        this.creationDate = creationDate;
    }

}

export interface GetFeedInputDTO{
    userId: string
}

export interface GetFeedByTypeInputDTO{
    type: PostType;
}