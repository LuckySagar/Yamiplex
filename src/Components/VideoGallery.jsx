// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const videoData = [
  { id: 1, title: "One Piece", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg", url: "https://drive.google.com/file/d/192R7l8a2_hiMAfhAHznkzB9gVjAZycwh/view?usp=drive_link" },
  { id: 2, title: "Dandadan", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a8b56a7589ff9edb6c86977c31e27a06.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
  { id: 3, title: "Blue Lock S2 ", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg", url: "https://drive.google.com/file/d/191roZHsgBayR6wvstVn21PQ9G3Xut-IG/view?usp=drive_link" },
  { id: 4, title: "Blue Box", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5f112b1c1f3f41ed87de0c48b6cf4e0d.jpg", url: "https://drive.google.com/file/d/1967MzzSXttH7BwHrUWVjyvz6l02kUkdp/view?usp=drive_link" },
  { id: 5, title: "Bleach:1000 Year", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b87a9e986e6e403ffddb520d24f5040a.jpg", url: "https://drive.google.com/file/d/194619mmiGe-vFpsD84WyZOjzGaMPeufi/view?usp=drive_link" },
  { id: 6, title: "Rurouni Kenshin", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4c339e5c8107dbda621c214e351f7164.jpg", url: "https://drive.google.com/file/d/19-ijdK8kVGspURBfgmTUrL3e_b_xiXH-/view?usp=drive_link" },
  { id: 7, title: "ZERO Starting Life", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/fd9a4794949c53baa8ef6ae16f78c7ab.jpg", url: "https://drive.google.com/file/d/19-ijdK8kVGspURBfgmTUrL3e_b_xiXH-/view?usp=drive_link" },
  { id: 8, title: "My Star:S2", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2d1cb3f0d6a5eea02851ea80f515b984.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
  { id: 9, title: "Wind Breaker", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg", url: "https://drive.google.com/file/d/192R7l8a2_hiMAfhAHznkzB9gVjAZycwh/view?usp=drive_link" },
  { id:10, title: "Good Bye.", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6431fdac6396ff285bf3c69b807a8a9a.jpg", url: "https://drive.google.com/file/d/191roZHsgBayR6wvstVn21PQ9G3Xut-IG/view?usp=drive_link" },
  { id:11, title: "Wolf's Rain OVA", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4ac580cfefc378c69336c022f6d396be.jpg", url: "https://drive.google.com/file/d/1967MzzSXttH7BwHrUWVjyvz6l02kUkdp/view?usp=drive_link" },
  { id:12, title: "Shattered Angels", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6751e8c65c3ca0b24dbc4ca6106126fe.jpg", url: "https://drive.google.com/file/d/194619mmiGe-vFpsD84WyZOjzGaMPeufi/view?usp=drive_link" },
  { id:13, title: "Hokuto no Ken", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6fb592efaecb861b3c6e2ad56e3edbdb.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
  { id:14, title: "Mobile Suit", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8726917b5e3074c1d2af0b0321450c49.jpg", url: "https://drive.google.com/file/d/19-ijdK8kVGspURBfgmTUrL3e_b_xiXH-/view?usp=drive_link" },
  { id:15, title: "Mobile Suit 100 S2", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/7666930fed4567f5ef05c0b31d05e059.jpg", url: "https://drive.google.com/file/d/192R7l8a2_hiMAfhAHznkzB9gVjAZycwh/view?usp=drive_link" },
  { id:16, title: "Ranma ½ OVA", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/06c902b091ea5ae2c711b6e00fa3705a.jpg", url: "https://drive.google.com/file/d/191roZHsgBayR6wvstVn21PQ9G3Xut-IG/view?usp=drive_link" },
  { id:17, title: "Dragon Ball:Super", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/07f5f8dadfbee19e3bf964bed4884a77.jpg", url: "https://drive.google.com/file/d/1967MzzSXttH7BwHrUWVjyvz6l02kUkdp/view?usp=drive_link" },
  { id:18, title: "Fist of North Star", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9033faebe68a6353c1f26b499f260279.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
  { id:19, title: "Fist of North Star 2", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5f42293779d5197b997e6a4a56db1b1c.jpg", url: "https://drive.google.com/file/d/194619mmiGe-vFpsD84WyZOjzGaMPeufi/view?usp=drive_link" },
  { id:20, title: "Ikkitousen", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f349ebae2fc3550292d702df08bf0ea9.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
  { id:21, title: "Yu Yu Hakusho", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6c40b2b7f5ccc41e1e758bd2d62890e4.jpg", url: "https://drive.google.com/file/d/192R7l8a2_hiMAfhAHznkzB9gVjAZycwh/view?usp=drive_link" },
  { id:22, title: "Baki", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4fe77589bb2ca6f2857ba863c1d78f3e.jpg", url: "https://drive.google.com/file/d/191roZHsgBayR6wvstVn21PQ9G3Xut-IG/view?usp=drive_link" },
  { id:23, title: "Air Master", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/86019217f47f0835c0ffc88bf308deed.jpg", url: "https://drive.google.com/file/d/1967MzzSXttH7BwHrUWVjyvz6l02kUkdp/view?usp=drive_link" },
  { id:24, title: "Ben-To", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/22bf01b5e667839003adafe1d63cdf8d.jpg", url: "https://drive.google.com/file/d/194619mmiGe-vFpsD84WyZOjzGaMPeufi/view?usp=drive_link" },
  { id:25, title: "Battle of Heavens", thumbnail: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/7c796b421dd40f7f22909ace96e6c144.jpg", url: "https://drive.google.com/file/d/19BN2tvFezeupGW4azTMKVE-Y3DwKxGu1/view?usp=drive_link" },
];


const VideoGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videoData.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="video-gallery">
      <h2>Featured Videos</h2>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="gallery">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div className="video-card" key={video.id}>
              <img src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="watch-btn">
                Watch Now
              </a>
            </div>
          ))
        ) : (
          <p>No videos found for &quot;{searchQuery}&quot;</p>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
