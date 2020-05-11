import { MastodonField } from './MastodonField';

export class MastodonAccount {
    // Base
    id:string;
    username:string;
    acct:string;
    url:string;
    // Display
    display_name:string;
    avatar:string;
    avatar_static:string;

    // Statistical
    created_at: string;
    statuses_count: number;
    followers_count: number;
    following_count: number;

    // Extra
    moved: MastodonAccount;
    bot:boolean;
    fields: Array<MastodonField>;

}