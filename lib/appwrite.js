import { Client, Account, Avatars, Databases } from "react-native-appwrite"


export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('688dd06a001806ae4a46')
  .setPlatform('dev.netninja.shelf')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)