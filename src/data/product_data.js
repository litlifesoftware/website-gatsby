import HistoryOfMeIcon from "../components/icons/history_of_me_icon";
import RemainingLifetimeIcon from "../components/icons/remaining_lifetime_icon";

const productData = [
  {
    title: "History of Me",
    slogan: "Your personal digital diary.",
    description:
      "History of Me allows you to keep a private and digital diary on your phone.",
    icon: HistoryOfMeIcon,
    url: "https://play.google.com/store/apps/details?id=com.litlifesoftware.historyofme",
    latestRelease:
      "https://github.com/litlifesoftware/HistoryOfMe/releases/latest",
    youtubeId: "58lSSH4YNj0",
    keywords: [
      { headline: "Relive", description: "Browse through your memories." },
      { headline: "Read", description: "Read your diary entries." },
      { headline: "Track", description: "View your stats and keep track." },
    ],
    route: "/historyofme",
  },
  {
    title: "Remaining Lifetime",
    slogan: "Keep track of your life achievements.",
    description:
      "Remaining Lifetime allows you to visualize your entire life and motivates you to make every month count.",
    icon: RemainingLifetimeIcon,
    url: "https://play.google.com/store/apps/details?id=com.litlifesoftware.remaining_lifetime",
    latestRelease:
      "https://github.com/litlifesoftware/RemainingLifetime/releases/latest",
    keywords: [
      { headline: "Track", description: "Keep track of your achievements." },
      { headline: "Visualize", description: "Visualize your achievements." },
      { headline: "Overview", description: "Overview where you are now." },
    ],
    route: "/remaininglifetime",
  },
];

export default productData;
