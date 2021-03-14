function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.max(yourLeft,yourRight) == Math.max(friendsRight,friendsLeft) && Math.min(yourLeft,yourRight) == Math.min(friendsRight,friendsLeft)
}   