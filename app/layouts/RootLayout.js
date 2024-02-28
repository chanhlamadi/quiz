import { withCoalescedInvoke } from "next/dist/lib/coalesced-function"

export default function RootLayout({children}) {
    return (
        <div className="max-w-md min-h-screen mx-auto  bg-mitzvah">
            { children }
        </div>
    )
}

