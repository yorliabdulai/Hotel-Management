import { defineField } from 'sanity';
import user from './user';
const account = {
    name: 'account',
    title: 'Account',
    type: 'document',
    field: [
        defineField({
           name: 'providerType',
           type: 'string',
        }),
        defineField({
            name: 'providerId',
            type: 'string',
         }),
         defineField({
            name: 'providerAccountId',
            type: 'string',
         }),
         defineField({
            name: 'refreshToken',
            type: 'string',
         }),
         defineField({
            name: 'accessToken',
            type: 'string',
         }),
         defineField({
            name: 'accessTokenExpired',
            type: 'number',
         }),
         defineField({
            name: 'user',
            title: 'user',
            type: 'reference',
            to: [{ type: 'user'}],
         })
    ], 
};
export default account