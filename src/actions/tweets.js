import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS'

function toggleTweet({id,authedUser,hasLiked}){
    return {
        type:TOGGLE_TWEETS,
        id,
        hasLiked,
        authedUser
    }
}

export function receiveTweets(tweets){
    return {
        type:RECEIVE_TWEETS,
        tweets,
    }
}

export function handleToggleTweet(info){
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('error at handleToggleTweet: ',e)
                dispatch(toggleTweet(info))
                alert('the was an error liking the tweet. Try again.')
            })
    }
}

