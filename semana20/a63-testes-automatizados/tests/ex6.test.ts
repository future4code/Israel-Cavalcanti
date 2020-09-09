import * as dotenv from "dotenv";
import { PostDatabase } from "../data/PostDatabase";

dotenv.config();

const postDb = new PostDatabase();

afterAll(async () => {
  await postDb.deletePostById("id do post 10");
  await postDb.destroyConnection();
});

test("Testando criação de post", async () => {
  const post = {
    id: "id do post 10",
    photo: "foto",
    description: "Descrição",
    createAt: "2020-01-09",
    creator_id: "795fb3c9-b530-4ffa-ae9a-fe82656e7c2e",
    type: "Normal",
  };

  await postDb.createPost(
    post.id,
    post.photo,
    post.description,
    post.createAt,
    post.creator_id,
    post.type
  );

  const postFromDb = await postDb.getPostById(post.id);

  expect(postFromDb).not.toBe(undefined);

  expect(postFromDb).toMatchObject({
    id: "id do post 10",
  });
});
