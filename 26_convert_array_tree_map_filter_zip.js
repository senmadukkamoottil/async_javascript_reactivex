/*Exercise 26: Converting from Arrays to Deeper Trees

Let's try creating a deeper tree structure. 
This time we have 4 separate arrays each containing lists, videos, boxarts, and 
bookmarks respectively. Each object has a parent id, indicating its parent. We want to build an array of list objects, 
each with a name and a videos array. The videos array will contain the video's id, title, bookmark time,
 and smallest boxart url. In other words we want to build the following structure:

Expecting result
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber",
				"time": 32432,
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
			},
			{
				"id": 675465,
				"title": "Fracture",
				"time": 3534543,
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard",
				"time": 645243,
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"time": 984934,
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
			}
		]
	}
]
*/

function data() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		],
		boxarts = [
			{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
			{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
			{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
			{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
			{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
			{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
			{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
		],
		bookmarks = [
			{ videoId: 65432445, time: 32432 },
			{ videoId: 675465, time: 3534543 },
			{ videoId: 70111470, time: 645243 },
			{ videoId: 654356453, time: 984934 }
		];
    /*var result = lists.map( lists => (
       
      { 'name': lists.name,
        
        'videos': videos.filter( video => lists.id === video.listId).
              map(video => 
              var boxartVar = boxarts.reduce( (acc, cur) => acc.height*acc.width<cur.height*cur.width?acc:cur);
       				var bookmarkVar = bookmarks.filter( bookmarks => bookmarks.videoId === videos.id);
    	
  						return Array.zip(boxartVar, bookmarkVar,
                	 (boxartVar, bookmarkVar)=>
                         ({ 
                           				id: video.id, 
                           				title: video.title, 
                           				boxarts: boxartVar.url, 
                           				time: bookmarkVar.time 
                         				})
  														);
														}) 						
      }
  
  ));
  
  console.log(JSON.stringify(result), null, 2);
  */


	return lists.map(function(list) {
		return {
			name: list.name,
			videos:
				videos.
					filter(function(video) {
						return video.listId === list.id;
					}).
					concatMap(function(video) {
						return Array.zip(
							bookmarks.filter(function(bookmark) {
								return bookmark.videoId === video.id;
							}),
							boxarts.filter(function(boxart) {
								return boxart.videoId === video.id;
							}).
							reduce(function(acc,curr) {
								return acc.width * acc.height < curr.width * curr.height ? acc : curr;
							}),
							function(bookmark, boxart) {
								return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url };
							});
				})
		};
	});

}
        