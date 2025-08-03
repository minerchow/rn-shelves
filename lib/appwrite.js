import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('688dd06a001806ae4a46')
  .setPlatform('dev.netninja.shelf')

export const account = new Account(client)
export const avatars = new Avatars(client)