const baseRef = "/board";

const boardNavLinks = [
  //base주솔르 따로빼서 관리 해야할 듯
  { href: `${baseRef}/all`, title: "전체", slug: "all" },
  { href: `${baseRef}/notice`, title: "공지사항", slug: "notice" },
  { href: `${baseRef}/free`, title: "자유", slug: "free" },
  { href: `${baseRef}/fight`, title: "싸움", slug: "fight" },
  { href: `${baseRef}/rgm`, title: "길드원 모집", slug: "rgm" },
  { href: `${baseRef}/event`, title: "이벤트", slug: "event" },
];

export default boardNavLinks;
