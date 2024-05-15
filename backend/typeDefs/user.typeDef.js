const userTypeDef = `#graphql
    type User {
        _id:ID!
        username:String!
        name:String!
        password:String!
        profilePicture:String
        gender:String!
        transactions:[Transaction!]
    }
    type Query {
        # users: [User!]
        user(userId:ID!):User
        authUser:User
    }
    type Mutation {
        signUp(input:SignUpInput):User
        signIn(input:SignInInput):User
        signOut:SignOutResponse
    }

    input SignUpInput {
        username:String!
        name:String!
        password:String!
        gender:String!
    }

    input SignInInput {
        username:String!
        password:String!
    }

    type SignOutResponse {
        message:String!
    }



`;

export default userTypeDef;
