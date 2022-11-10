// API url: https://graphqlzero.almansi.me/api
const container = document.querySelector(".results-list");
import { orderBy, result } from "lodash";

import ApolloClient, { gql } from "apollo-boost";

async function makeGQLCall() {
  const gqlUrl = "https://graphqlzero.almansi.me/api";

  const client = new ApolloClient({
    uri: gqlUrl,
  });

  const json = await client.query({
    query: gql`
      {
        posts {
          data {
            id
            title
          }
        }
      }
    `,
  });

  const result =json.data.posts.data 
  const orderPost = orderBy(result, ["id"], ["desc"])

  // forloop
  for (let i = 0; i < orderPost.length; i++){

    container.innerHTML += `

        <li>
          <p class="orderPost_id">${orderPost[i].id}</p>
          <p>${orderPost[i].title}</p>
        </li>
    `
    if(i === 9){
      break;
    }    
  }

  // orderPost.forEach(post => {
  //   console.log(post)
  //   container.innerHTML += `
  //               <li>${post.id},${post.title}</li>    
  //   `
  // });
}

makeGQLCall();
