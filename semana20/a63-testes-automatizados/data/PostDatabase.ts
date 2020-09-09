import { BaseDatabase } from "./BaseDatabase";
import { Post, PostType } from "../model/Post";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "Post";

  public async createPost(
    id: string,
    photo: string,
    description: string,
    createAt: string,
    creator_id: string,
    type: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          photo,
          description,
          createAt,
          creator_id,
          type,
        })
        .into(PostDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getFriendsFeed(userId: string): Promise<Post[]> {
    try {
      const postArray: Post[] = [];

      const result = await this.getConnection().raw(`
            SELECT p.* FROM ${PostDatabase.TABLE_NAME} p
            JOIN Friendship f
            ON p.user_id = f.id_responder
            WHERE f.id_requester = "${userId}"
            ORDER BY p.creation_date DESC;
            `);

      for (let post of result[0]) {
        postArray.push(Post.toPostModel(post));
      }

      return postArray;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getFeedByType(type: PostType): Promise<Post[]> {
    try {
      const postArray: Post[] = [];

      const result = await this.getConnection().raw(`
            SELECT p.* FROM ${PostDatabase.TABLE_NAME} p
            WHERE type = "${type}"
            ORDER BY p.creation_date DESC;
            `);

      for (let post of result[0]) {
        postArray.push(Post.toPostModel(post));
      }

      return postArray;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deletePostById(id: string): Promise<any> {
    await this.getConnection()
      .del()
      .from(PostDatabase.TABLE_NAME)
      .where({ id });
  }
}
