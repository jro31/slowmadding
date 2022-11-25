const parseFacebookFeed = async () => {
  const facebookData = await fetchFacebookFeed()
  const parsedFacebookData = await parseFacebookData(facebookData)

  return parsedFacebookData
}

// When this token expires, go to https://developers.facebook.com/tools/explorer/
// Ensure the correct app is chosen, then click the information 'i' next to the access token
// and click 'Open in Access Token Tool'. Click 'Extend Access Token' and copy the new token
// to the 'GRAPH_API_ACCESS_TOKEN' env variable.
const fetchFacebookFeed = async () => {
  // const response = await fetch(
  //   `https://graph.facebook.com/v14.0/me?fields=feed.limit(10)%7Btype%2Cname%2Cfull_picture%2Cmessage%2Cplace%2Cattachments%2Clink%2Ccreated_time%2Cdescription%2Cpermalink_url%7D&access_token=${process.env.GRAPH_API_ACCESS_TOKEN}`
  // )
  // const data = await response.json()

  // return data
  return dummyFacebookReturn
}

const parseFacebookData = (facebookData) =>
  facebookData.feed.data.map((post) => facebookPostObject(post))

const facebookPostObject = (post) => {
  switch (post.type) {
    case 'status':
      return {
        date: post.created_time,
        title: postTitle('a status update', post.place),
        text: post.message || null,
        media: post.attachments ? postMedia(post.attachments.data) : null,
        url: post.permalink_url,
        platform: 'facebook',
      }
    case 'link':
      return {
        date: post.created_time,
        title: postTitle('a link', post.place),
        text: post.name || null,
        media: post.attachments ? postMedia(post.attachments.data) : null,
        url: post.permalink_url,
        platform: 'facebook',
      }
    case 'photo':
      return {
        date: post.created_time,
        title: postTitle('a photo', post.place), // TODO: Check that post.place is present for photos with location (didn't have any in the dummy data I was using)
        text: post.message || null,
        media: post.attachments ? postMedia(post.attachments.data) : null,
        url: post.permalink_url,
        platform: 'facebook',
      }
    case 'video':
      // TODO
      return {}
    default:
      return {}
  }
}

const postTitle = (postTypeString, place = {}) =>
  `Jethro added ${postTypeString} to Facebook${postTitleLocation(place)}`

const postTitleLocation = (place) => {
  if (Object.keys(place).length === 0) return ''

  // TODO: This should link to Google maps with the lat/long in the location
  // Less easy than it should be because of the design of the card
  return ` from${
    place.name &&
    place.name !== `${place.location.city}, ${place.location.country}`
      ? ` ${place.name} in`
      : ''
  } ${place.location.city}, ${place.location.country}`
}

const postMedia = (attachmentsData) => {
  const dataObject = attachmentsData.find((obj) => 'media' in obj)
  if (!dataObject) return null

  const mediaObject = dataObject.media
  if (!mediaObject) return null

  if ('image' in mediaObject) {
    return {
      type: 'image',
      url: mediaObject.image.src,
    }
  } else {
    return null
  }
}

export default parseFacebookFeed

const dummyFacebookReturn = {
  feed: {
    data: [
      {
        type: 'status',
        place: {
          name: 'DewyHouse x ChimneyHome',
          location: {
            city: 'Chiang Mai',
            country: 'Thailand',
            latitude: 18.801495223338,
            longitude: 98.978537499993,
            street: '19/2 charoensuk Rd Changpuak',
            zip: '50300',
          },
          id: '1288872901188003',
        },
        attachments: {
          data: [
            {
              media: {
                image: {
                  height: 720,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/300779383_508525594613152_1485775215630054806_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeHBZUjWHYXk2rhWyzXzDDYQxQDllQqtJBHFAOWVCq0kEVWRAT9Jld7XYExE-JwH-BLsXGOhH5bh9GHmrlq1QUIw&_nc_ohc=VTcjyMmy8ogAX9dgae_&_nc_oc=AQlvO8BLnC0O51EjzZCgjcIAygdz9hKoT8AMon4RjMcnaUD3IMVSKGic-MK0sy4K8xk&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfC7nTHhzzm04YYown1zZn0KK1N6X5xaAC1Hya6Pq7i_iA&oe=6373A6D8',
                  width: 720,
                },
              },
              target: {
                id: '1288872901188003',
                url: 'https://facebook.com/dewyhousechiangmai',
              },
              title: 'DewyHouse x ChimneyHome',
              type: 'map',
              url: 'https://facebook.com/dewyhousechiangmai',
            },
          ],
        },
        created_time: '2022-11-04T15:59:35+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/2985841978228628',
        id: '2930322743780552_2985841978228628',
      },
      {
        type: 'status',
        message: 'In London 😲',
        place: {
          name: 'London, United Kingdom',
          location: {
            city: 'London',
            country: 'United Kingdom',
            latitude: 51.5141,
            longitude: -0.1094,
          },
          id: '106078429431815',
        },
        attachments: {
          data: [
            {
              media: {
                image: {
                  height: 275,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.30497-1/83245568_1845797888897938_3274147281632231424_n.png?stp=c81.0.275.275a_dst-png&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_eui2=AeH92oSDewRvfr7AJdX0BjXgk6kuOrbPep-TqS46ts96n477vYKZ8Tv2n2pGRX0W-z1eh-thl0_k-gL3RVu8WkTk&_nc_ohc=uJYIE2McaZgAX_r1pFX&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfDu79Ltu5NdehOalE8EkCjMCJmlGnHCuC-6LPPDkSLBCw&oe=639582D4',
                  width: 275,
                },
              },
              target: {
                id: '106078429431815',
                url: 'https://www.facebook.com/106078429431815',
              },
              title: 'London, United Kingdom',
              type: 'map',
              url: 'https://www.facebook.com/106078429431815',
            },
          ],
        },
        created_time: '2022-09-14T17:53:31+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/2930333330446160',
        id: '2930322743780552_2930333330446160',
      },
      {
        type: 'link',
        name: 'Started new job at Freelance',
        place: {
          name: 'London, United Kingdom',
          location: {
            city: 'London',
            country: 'United Kingdom',
            latitude: 51.5141,
            longitude: -0.1094,
          },
          id: '106078429431815',
        },
        attachments: {
          data: [
            {
              target: {
                id: '958380660974780',
                url: 'https://www.facebook.com/2930322743780552/timeline/story?ut=32&wstart=-2051193600&wend=2147483647&hash=958380660974780&pagefilter=3&ustart=1',
              },
              title: 'Started new job at Freelance',
              type: 'life_event',
              url: 'https://www.facebook.com/2930322743780552/timeline/story?ut=32&wstart=-2051193600&wend=2147483647&hash=958380660974780&pagefilter=3&ustart=1',
            },
          ],
        },
        link: 'https://www.facebook.com/2930322743780552/timeline/story?ut=32&wstart=-2051193600&wend=2147483647&hash=958380660974780&pagefilter=3&ustart=1',
        created_time: '2016-08-11T10:09:53+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/timeline/story?ut=32&wstart=-2051193600&wend=2147483647&hash=958380660974780&pagefilter=3&ustart=1',
        id: '2930322743780552_958380660974780',
      },
      {
        type: 'video',
        name: 'How To Perfectly Tie Your Running Shoes to Prevent Blisters (Heel Lock)',
        full_picture:
          'https://external.fcnx4-1.fna.fbcdn.net/emg1/v/t13/4437896616690013293?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4sn34FYrM8I%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=dst-emg0_q75_s1280x720&_nc_eui2=AeGhRqAEEbBe7cO5BSUNun_Fngpz_AdyLtyeCnP8B3Iu3IvbYPOtfdzQkx1GW5UTDLCrwzRABhKIPvxclCVm1wtN&ccb=13-1&oh=06_AbEkY2cjflBvkHl4kdfKAR8_HaKnkuwOKZm2PdvucAw4nQ&oe=636F66AF&_nc_sid=834697',
        message: 'Learn something new everyday 🤗',
        attachments: {
          data: [
            {
              description:
                "Say goodbye to blisters from your running shoes for good! Learn how to tie your shoes so you don't get those annoying and painful blisters from running. ♥ LI...",
              media: {
                image: {
                  height: 720,
                  src: 'https://external.fcnx4-1.fna.fbcdn.net/emg1/v/t13/4437896616690013293?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4sn34FYrM8I%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-emg0_p720x720_q75&_nc_eui2=AeGhRqAEEbBe7cO5BSUNun_Fngpz_AdyLtyeCnP8B3Iu3IvbYPOtfdzQkx1GW5UTDLCrwzRABhKIPvxclCVm1wtN&ccb=13-1&oh=06_AbEGf1mTFj1eKABYY8PpYNlJ1Bakq-EnriGrrbNLR3Ah8g&oe=636F66AF&_nc_sid=6ac203',
                  width: 720,
                },
                source: 'https://www.youtube.com/embed/4sn34FYrM8I?autoplay=1',
              },
              target: {
                url: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fattribution_link%3Fa%3Dpm4-3xi1vrg%26u%3D%252Fwatch%253Fv%253D4sn34FYrM8I%2526feature%253Dshare&h=AT0gvVfiO5JCg0HXQ___onAc2FtsGQ1KPmxIVQl9MDy_uvPgF3xK3M_Oc0XZZRQU8zm1bGNK2P6tRV0ww5GtirRI6hjjDhXf_9dxQBDNw00zcB-hrQ5c3OV_Buh0EIO6&s=1',
              },
              title:
                'How To Perfectly Tie Your Running Shoes to Prevent Blisters (Heel Lock)',
              type: 'share',
              url: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fattribution_link%3Fa%3Dpm4-3xi1vrg%26u%3D%252Fwatch%253Fv%253D4sn34FYrM8I%2526feature%253Dshare&h=AT0gvVfiO5JCg0HXQ___onAc2FtsGQ1KPmxIVQl9MDy_uvPgF3xK3M_Oc0XZZRQU8zm1bGNK2P6tRV0ww5GtirRI6hjjDhXf_9dxQBDNw00zcB-hrQ5c3OV_Buh0EIO6&s=1',
            },
          ],
        },
        link: 'https://www.youtube.com/attribution_link?a=pm4-3xi1vrg&u=%2Fwatch%3Fv%3D4sn34FYrM8I%26feature%3Dshare',
        created_time: '2016-12-19T14:41:10+0000',
        description:
          "Say goodbye to blisters from your running shoes for good! Learn how to tie your shoes so you don't get those annoying and painful blisters from running. ♥ LI...",
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/1053146951498150',
        id: '2930322743780552_1053146951498150',
      },
      {
        type: 'photo',
        full_picture:
          'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/15369190_1044690825677096_8921319499289215577_o.jpg?stp=dst-jpg_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeHpFexvb9EQOzgK3cRit1vRJIXBnCatrFskhcGcJq2sW0Suz3F2X0YVxRVZam6rOjeITsJECw573fw0vYEN8qQf&_nc_ohc=d-56W8ol9W4AX_hrXcc&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfAVatdkzILX9JatitmPLAG5YJJIjBeyy-oWlSnF377rXw&oe=63957198',
        attachments: {
          data: [
            {
              media: {
                image: {
                  height: 545,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/15369190_1044690825677096_8921319499289215577_o.jpg?stp=dst-jpg_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeHpFexvb9EQOzgK3cRit1vRJIXBnCatrFskhcGcJq2sW0Suz3F2X0YVxRVZam6rOjeITsJECw573fw0vYEN8qQf&_nc_ohc=d-56W8ol9W4AX_hrXcc&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfAVatdkzILX9JatitmPLAG5YJJIjBeyy-oWlSnF377rXw&oe=63957198',
                  width: 720,
                },
              },
              target: {
                id: '1044690825677096',
                url: 'https://www.facebook.com/photo.php?fbid=1044690825677096&set=a.232118733600980&type=3',
              },
              type: 'photo',
              url: 'https://www.facebook.com/photo.php?fbid=1044690825677096&set=a.232118733600980&type=3',
            },
          ],
        },
        link: 'https://www.facebook.com/photo.php?fbid=1044690825677096&set=p.1044690825677096&type=3',
        created_time: '2016-12-09T06:12:25+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/2838003753012452',
        id: '2930322743780552_2838003753012452',
      },
      {
        type: 'photo',
        full_picture:
          'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/15259674_1039207002892145_6966788087778830407_o.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=dd7718&_nc_eui2=AeHrDrUf5uqm_E7O9VwNyGNz1kqcnQfZIb3WSpydB9khvYGriZXUWU6DjK55byL2jzA3g7Rc30l4YEJQDAU3YWzm&_nc_ohc=6fg9f79SEh0AX9BcQMM&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfAK5PCrpXSMb-rP2TmNxvRHSpfkosmdT_7dTZm881dYVQ&oe=63959149',
        message: 'This is better than having a baby.',
        attachments: {
          data: [
            {
              description: 'This is better than having a baby.',
              media: {
                image: {
                  height: 720,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/15259674_1039207002892145_6966788087778830407_o.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=dd7718&_nc_eui2=AeHrDrUf5uqm_E7O9VwNyGNz1kqcnQfZIb3WSpydB9khvYGriZXUWU6DjK55byL2jzA3g7Rc30l4YEJQDAU3YWzm&_nc_ohc=6fg9f79SEh0AX9BcQMM&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfAK5PCrpXSMb-rP2TmNxvRHSpfkosmdT_7dTZm881dYVQ&oe=63959149',
                  width: 720,
                },
              },
              target: {
                id: '1039207002892145',
                url: 'https://www.facebook.com/photo.php?fbid=1039207002892145&set=a.650246411788208&type=3',
              },
              title: 'Instagram Photos',
              type: 'photo',
              url: 'https://www.facebook.com/photo.php?fbid=1039207002892145&set=a.650246411788208&type=3',
            },
          ],
        },
        link: 'https://www.facebook.com/photo.php?fbid=1039207002892145&set=p.1039207002892145&type=3',
        created_time: '2016-12-02T06:37:15+0000',
        permalink_url:
          'https://www.facebook.com/photo.php?fbid=1039207002892145&set=p.1039207002892145&type=3',
        id: '2930322743780552_1039207002892145',
      },
      {
        type: 'photo',
        full_picture:
          'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/14884655_1016341388512040_526657856502496018_o.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeHoEBGkguWe12Od0gGSXC9eqOHHAlpe6z-o4ccCWl7rP39X4LsMpeAo777uAuXoV-bBpMO333SX9AKSn6WfS-nI&_nc_ohc=GzxZ8Z4KpZ0AX9Xiz-L&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfDXWqtR0ke11xZEKS_pZVSZNK9ShZZCT--c6nLx3JnmSQ&oe=63956F71',
        message: 'Sunrise',
        attachments: {
          data: [
            {
              description: 'Sunrise',
              media: {
                image: {
                  height: 720,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/14884655_1016341388512040_526657856502496018_o.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeHoEBGkguWe12Od0gGSXC9eqOHHAlpe6z-o4ccCWl7rP39X4LsMpeAo777uAuXoV-bBpMO333SX9AKSn6WfS-nI&_nc_ohc=GzxZ8Z4KpZ0AX9Xiz-L&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfDXWqtR0ke11xZEKS_pZVSZNK9ShZZCT--c6nLx3JnmSQ&oe=63956F71',
                  width: 720,
                },
              },
              target: {
                id: '1016341388512040',
                url: 'https://www.facebook.com/photo.php?fbid=1016341388512040&set=a.232118733600980&type=3',
              },
              type: 'photo',
              url: 'https://www.facebook.com/photo.php?fbid=1016341388512040&set=a.232118733600980&type=3',
            },
          ],
        },
        link: 'https://www.facebook.com/photo.php?fbid=1016341388512040&set=p.1016341388512040&type=3',
        created_time: '2016-11-01T00:12:27+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/2834287890050705',
        id: '2930322743780552_2834287890050705',
      },
      {
        type: 'photo',
        full_picture:
          'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/14882207_1015689235243922_5552483668326641264_o.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeGmLv5Y-KKC9_yVWkJbFWIhtfcq1fQYxE219yrV9BjETX5fAWS1hjlhygc6emIaBcyOmCU85P_rrJj_6oybbdsk&_nc_ohc=v_3CFPQPbAUAX9wUAxF&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfBc-JcittGEQGfNHkEDp7uYVeaNax9J6CbD3tM20Abe5w&oe=63957B4C',
        message: 'Bungalow on the beach 😬',
        attachments: {
          data: [
            {
              description: 'Bungalow on the beach 😬',
              media: {
                image: {
                  height: 681,
                  src: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t31.18172-8/14882207_1015689235243922_5552483668326641264_o.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=8024bb&_nc_eui2=AeGmLv5Y-KKC9_yVWkJbFWIhtfcq1fQYxE219yrV9BjETX5fAWS1hjlhygc6emIaBcyOmCU85P_rrJj_6oybbdsk&_nc_ohc=v_3CFPQPbAUAX9wUAxF&_nc_ht=scontent.fcnx4-1.fna&edm=AP4hL3IEAAAA&oh=00_AfBc-JcittGEQGfNHkEDp7uYVeaNax9J6CbD3tM20Abe5w&oe=63957B4C',
                  width: 720,
                },
              },
              target: {
                id: '1015689235243922',
                url: 'https://www.facebook.com/photo.php?fbid=1015689235243922&set=a.232118733600980&type=3',
              },
              type: 'photo',
              url: 'https://www.facebook.com/photo.php?fbid=1015689235243922&set=a.232118733600980&type=3',
            },
          ],
        },
        link: 'https://www.facebook.com/photo.php?fbid=1015689235243922&set=p.1015689235243922&type=3',
        created_time: '2016-10-31T07:41:47+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/2834188343393993',
        id: '2930322743780552_2834188343393993',
      },
      {
        type: 'link',
        name: 'Air China magazine apologises for London race slur - BBC News',
        full_picture:
          'https://external.fcnx4-1.fna.fbcdn.net/emg1/v/t13/7779429477060771147?url=http%3a%2f%2fichef.bbci.co.uk%2fnews%2f1024%2fcpsprodpb%2f92DB%2fproduction%2f_91059573_capture.jpg&fb_obo=1&utld=co.uk&stp=dst-emg0_q75&_nc_eui2=AeGIrfdTeSgXhNZtJIVuNWTBxgcDeidrgE7GBwN6J2uATnswOsJsnog9NaMO7YYzj2WNL-jqSXRIDgZ1zwozkZsp&ccb=13-1&oh=06_AbH7Fnqk-acHFm3JeDDdm1eO_lbBbBxA5iyBbzrQPHtDWg&oe=636F65E8&_nc_sid=5f3a21',
        attachments: {
          data: [
            {
              description:
                'An in-flight magazine apologises for telling passengers to take "precautions" when visiting areas populated mainly by "Indians, Pakistanis and black people".',
              media: {
                image: {
                  height: 576,
                  src: 'https://external.fcnx4-1.fna.fbcdn.net/emg1/v/t13/7779429477060771147?url=http%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F1024%2Fcpsprodpb%2F92DB%2Fproduction%2F_91059573_capture.jpg&fb_obo=1&utld=co.uk&stp=c0.5000x0.5000f_dst-emg0_p576x576_q75&_nc_eui2=AeFKYG6-E_N8etFE5WqPrnViqZ1c9_wx0ZqpnVz3_DHRmq8UWa9lp26J6wEcg6RMtGcZcf1l8J8qyRWlWlwLjWRR&ccb=13-1&oh=06_AbHECNwj8LV5cclrfr3MsO2IsNnfnTnHvBGOVrZIbNcKYw&oe=636F65E8&_nc_sid=6ac203',
                  width: 576,
                },
              },
              target: {
                url: 'http://l.facebook.com/l.php?u=http%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fuk-england-london-37307602&h=AT1W83m-dux0QVr5NXJRUeW5VtRigRsYEzf-lTm8_wZiPD3i-t5LCi-AkcSlPSQft6lsej00HXPUGTnVtxMmJyzIMDuCpw_huyif-Vwlt_HDLwZMsVcpB75DUlYR6a1u&s=1',
              },
              title:
                'Air China magazine apologises for London race slur - BBC News',
              type: 'share',
              url: 'http://l.facebook.com/l.php?u=http%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fuk-england-london-37307602&h=AT1W83m-dux0QVr5NXJRUeW5VtRigRsYEzf-lTm8_wZiPD3i-t5LCi-AkcSlPSQft6lsej00HXPUGTnVtxMmJyzIMDuCpw_huyif-Vwlt_HDLwZMsVcpB75DUlYR6a1u&s=1',
            },
          ],
        },
        link: 'http://www.bbc.co.uk/news/uk-england-london-37307602',
        created_time: '2016-09-08T16:57:42+0000',
        description:
          'An in-flight magazine apologises for telling passengers to take "precautions" when visiting areas populated mainly by "Indians, Pakistanis and black people".',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/977795045700008',
        id: '2930322743780552_977795045700008',
      },
      {
        type: 'status',
        created_time: '2016-09-07T14:38:46+0000',
        permalink_url:
          'https://www.facebook.com/2930322743780552/posts/976995425779970',
        id: '2930322743780552_976995425779970',
      },
    ],
    paging: 'REDACTED',
  },
  id: '2930322743780552',
}
