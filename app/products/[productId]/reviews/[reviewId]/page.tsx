export default async function ReviewDetails({params}:{params: Promise<{productId: string, reviewId:string}>}) {
    const {productId, reviewId} = await params;
    return (
        <div>
            <h1>Product {productId}'s review {reviewId} details</h1>
        </div>
    );
}