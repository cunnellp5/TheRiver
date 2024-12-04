/*
  YOUTUBE TYPES FOR TS
    * Keeping the youtube types local to this directory becaseu i dont expect to reuse them given this unique set up
    * The types are based on the youtube api v3

  Why am i querying data like this?
    * I want to keep querying for data to third party apis at a minimum, and only when necessary.
      If videos dont get uploaded that often, there isnt much point in making a request everytime we load the page.
      Why not force the admin to 'collect' the data, that is then saved to our DB.
      We can then render just the text we care about and make requests against our own db.

  Source:
    * https://developers.google.com/youtube/v3/docs/playlistItems#resource
    * https://developers.google.com/youtube/v3/docs/videos#resource

  TODO: consider deleting all the unused object keys

	These should be the videoIds from the 'originals' playlist
		const videoIdsList = [
			'KzFmhEvBsKg',
			'EHsp2l08DyY',
			'H5lNpqJjvqM',
			'zEa9hCH_acs',
			'qa9NtCoOaCk',
			'0zhzvcDHcDs',
			'Gj1zGmGRfIQ',
			'oWPTJSC0qJU'
		];
*/

export interface PlaylistItemResource {
  kind: "youtube#playlistItem";
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
  contentDetails: {
    videoId: string;
    startAt: string;
    endAt: string;
    note: string;
    videoPublishedAt: Date;
  };
  status: {
    privacyStatus: string;
  };
}

// type PlaylistItem = {
// 	kind: string; // playlistItemListResponse,
// 	etag: string;
// 	nextPageToken: string;
// 	prevPageToken: string;
// 	pageInfo: {
// 		totalResults: number;
// 		resultsPerPage: number;
// 	};
// 	items: [PlaylistItemResource];
// };

export interface VideoResource {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: string[];
      blocked: string[];
    };
    contentRating: {
      acbRating: string;
      agcomRating: string;
      anatelRating: string;
      bbfcRating: string;
      bfvcRating: string;
      bmukkRating: string;
      catvRating: string;
      catvfrRating: string;
      cbfcRating: string;
      cccRating: string;
      cceRating: string;
      chfilmRating: string;
      chvrsRating: string;
      cicfRating: string;
      cnaRating: string;
      cncRating: string;
      csaRating: string;
      cscfRating: string;
      czfilmRating: string;
      djctqRating: string;
      djctqRatingReasons: string[];
      ecbmctRating: string;
      eefilmRating: string;
      egfilmRating: string;
      eirinRating: string;
      fcbmRating: string;
      fcoRating: string;
      fmocRating: string;
      fpbRating: string;
      fpbRatingReasons: string[];
      fskRating: string;
      grfilmRating: string;
      icaaRating: string;
      ifcoRating: string;
      ilfilmRating: string;
      incaaRating: string;
      kfcbRating: string;
      kijkwijzerRating: string;
      kmrbRating: string;
      lsfRating: string;
      mccaaRating: string;
      mccypRating: string;
      mcstRating: string;
      mdaRating: string;
      medietilsynetRating: string;
      mekuRating: string;
      mibacRating: string;
      mocRating: string;
      moctwRating: string;
      mpaaRating: string;
      mpaatRating: string;
      mtrcbRating: string;
      nbcRating: string;
      nbcplRating: string;
      nfrcRating: string;
      nfvcbRating: string;
      nkclvRating: string;
      oflcRating: string;
      pefilmRating: string;
      rcnofRating: string;
      resorteviolenciaRating: string;
      rtcRating: string;
      rteRating: string;
      russiaRating: string;
      skfilmRating: string;
      smaisRating: string;
      smsaRating: string;
      tvpgRating: string;
      ytRating: string;
    };
    projection: string;
    hasCustomThumbnail: boolean;
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: Date;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  player: {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
  };
  topicDetails: {
    topicIds: string[];
    relevantTopicIds: string[];
    topicCategories: string[];
  };
  recordingDetails: {
    recordingDate: Date;
  };
  fileDetails: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams: [
      {
        widthPixels: number;
        heightPixels: number;
        frameRateFps: number;
        aspectRatio: number;
        codec: string;
        bitrateBps: number;
        rotation: string;
        vendor: string;
      },
    ];
    audioStreams: [
      {
        channelCount: number;
        codec: string;
        bitrateBps: number;
        vendor: string;
      },
    ];
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
  };
  processingDetails: {
    processingStatus: string;
    processingProgress: {
      partsTotal: number;
      partsProcessed: number;
      timeLeftMs: number;
    };
    processingFailureReason: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions: {
    processingErrors: string[];
    processingWarnings: string[];
    processingHints: string[];
    tagSuggestions: [
      {
        tag: string;
        categoryRestricts: string[];
      },
    ];
    editorSuggestions: string[];
  };
  liveStreamingDetails: {
    actualStartTime: Date;
    actualEndTime: Date;
    scheduledStartTime: Date;
    scheduledEndTime: Date;
    concurrentViewers: number;
    activeLiveChatId: string;
  };
  localizations: {
    (key: string): {
      title: string;
      description: string;
    };
  };
}
