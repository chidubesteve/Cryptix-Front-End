import Link from "next/link";
import images from "../images";
const nftTransactions = [
  {
    tab: "Bid History",
    data: [
      {
        action: (
          <>
            Bought at $1,000 by{" "}
            <Link href="/author-profile">
              <b>Emeka</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user1,
        date: "Jan 04",
        time: "4:20 PM",
      },
      {
        action: (
          <>
            Offer of $750 by{" "}
            <Link href="/author-profile">
              <b>Janet</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user2,
        date: "Jan 04",
        time: "5:20 PM",
      },
      {
        action: (
          <>
            Bought at $1,000 by{" "}
            <Link href="/author-profile">
              <b>Joseph</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user7,
        date: "Jan 05",
        time: "3:20 PM",
      },
      {
        action: (
          <>
            Offer of $2000 by{" "}
            <Link href="/author-profile">
              <b>Johnny</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user6,
        date: "Jan 06",
        time: "5:30 PM",
      },
      {
        action: (
          <>
            Bought at $3,230 by{" "}
            <Link href="/author-profile">
              <b>Prince</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user8,
        date: "Jan 06",
        time: "5:30 PM",
      },
    ],
  },
  {
    tab: "Provenance",
    data: [
      {
        action: (
          <>
            Minted by{" "}
            <Link href="/author-profile">
              <b>Emeka</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user3,
        date: "Jan 04",
        time: "4:20 PM",
      },
      {
        action: (
          <>
            Listed by{" "}
            <Link href="/author-profile">
              <b>Janet</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user4,
        date: "Jan 04",
        time: "5:20 PM",
      },
      {
        action: (
          <>
            Listed by{" "}
            <Link href="/author-profile">
              <b>Joseph</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user5,
        date: "Jan 05",
        time: "3:20 PM",
      },
      {
        action: (
          <>
            Minted by{" "}
            <Link href="/author-profile">
              <b>Johnny</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user6,
        date: "Jan 06",
        time: "5:30 PM",
      },
      {
        action: (
          <>
            Minted by{" "}
            <Link href="/author-profile">
              <b>John</b>
            </Link>
          </>
        ),
        userProfileUrl: images.user2,
        date: "Jan 07",
        time: "3:20 PM",
      },
    ],
  },
  {
    tab: "Owner",
    data: [
      {
        userProfileUrl: images.user9,
        action: (
          <>
            Owned by{" "}
            <Link href="/author-profile">
             <b>Karim Costa</b>
            </Link>
          </>
        ),
        date: "Jan 04",
        time: "4:20 AM",
      },
    ],
  },
];
export default nftTransactions;
