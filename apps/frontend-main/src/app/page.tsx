import Link from "next/link";



export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
      <div>
          <div className="wrapper">
              <div className="container">
                <Link href="/dev">Dev</Link>
              </div>
          </div>
      </div>
  );
};
