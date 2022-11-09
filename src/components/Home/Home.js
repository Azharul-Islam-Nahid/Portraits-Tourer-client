import React from 'react';

const Home = () => {
    return (
        <div className='container m-auto mt-0'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-6/12' src='https://thumbs.dreamstime.com/b/tour-guide-provide-assistance-banner-organize-visit-museum-attraction-site-interest-cultural-historical-contemporary-heritage-143607771.jpg' alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Portraits Tourer</h1>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mb-10 w-9/12'>
                <h1 className='font-extrabold text-2xl mb-10'>​Tips for writing great customer reviews</h1>
                Provide useful, constructive feedback
        A good review includes enough detail to give others a feel for what happened.
        Explain which factors contributed to your positive, negative or just so-so experience.
        You might also offer your view on what the company is doing well, and how they can improve.
        But keep things friendly and courteous!
        Talk about a range of elements, including customer service
        Increase the relevance of your review by addressing your overall experience, including the level of customer service you received.
        Tell people how helpful the company was! Focusing on only one element,
        such as product quality or delivery options, provides limited insight to readers.

 Be detailed, specific, and honest
There’s no rule against only writing a handful of words in a review, but the more specific you can be, the more likely the review is to be useful. We suggest writing from your own individual perspective, keeping it honest and sticking to the facts. Help readers stand in your shoes.
            </div>
        </div>
    );
};

export default Home;