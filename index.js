void function(root){

//    function friends(api, steamid, relationship){
//        return api.query( ['ISteamUser','GetFriendList','v1']
//                        , {steamid: steamid, relationship: relationship ? relationship : 'all'}
//                        , true)
//    }
//
//    function resolve(api, vanityurl){
//        return api.query( ['ISteamUser','ResolveVanityURL','v1']
//                        , {vanityurl: vanityurl}
//                        , true)
//    }
//
//    function history(api){
//        return api.query( ['IDOTA2Match_570','GetMatchHistory','v1']
//                        , {}
//                        , true)
//    }
//            , GetFriendList: u.enslave(friends)
//            , ResolveVanityURL: u.enslave(resolve)
//            , GetMatchHistory: u.enslave(history)
    //

    var viral = require('viral')
      , u = require('totemizer')
      , xtend = require('xtend')
      , uri = require('URIjs')
      , hqst = require('hyperquest')
      , stm = uri('http://api.steampowered.com/')
      , api = function query(segments, search, debug){
            var map = xtend(stm.search(true), search)
            stm.search(map)
            segments.forEach(function(v, i){ stm.segment(i, v) })
            if ( debug ) console.log (stm.href())
            return hqst(stm.href())
        }

    module.exports = api

}(this)
