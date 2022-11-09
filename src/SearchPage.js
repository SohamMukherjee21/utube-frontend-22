import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://www.liveclefs.com/wp-content/uploads/2022/05/KRSNa-750x450.jpg"
        channel="KRSNA"
        verified
        subs="1.08M"
        noOfVideos="17"
        description="Official youtube channel of KR$NA, rapper/producer"
      />
      <hr />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />

      <VideoRow
        subs="1.08M"
        description="Official Music Video of Roll Up from KR$NA's album STILL HERE featuring Badshah"
        channel="KRSNA"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgo6_QGwUmBjX6NABDh8qzjhxjwS3gyfn2g&usqp=CAU"
        title="KR$NA - Roll Up ft Badshah | Official Music Video"
        views="17M views"
        timestamp="1 year ago"
      />
    </div>
  );
}

export default SearchPage;
