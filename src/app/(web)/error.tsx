"use client"
export default function Error ({error, reset}: {
    error: Error & {digest?: string};
    reset: () => void;
}) {
   return <div className="container mx-auto">
    <h2 className="font-heading text-red-800 mb-1">
        Something went wrong!
    </h2>
    <button className="btn-primary" onClick={()=> reset()} >Try Again</button>
   </div>
}