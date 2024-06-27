// src/app/blogdetail/[slug]/page.js
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import posts from '../data/posts';
import Image from 'next/image';
import Link from 'next/link';

import { slugify } from '@/utils';
import parse from 'html-react-parser';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';



const BlogDetail = () => {
    const { slug } = useParams();
    const post = posts.find(post => slugify(post.title) === slug);

    if (!post) return <p>Loading...</p>;
    console.log(post.title);

    return (
        <>
            <head>
                <title>{post.title}</title>
                <meta name="description" content={post.metadescription} />
                {parse(post.html)}
 
</head>
            <div className='relative z-50'>
                
                <Header />
            </div>
            <div className="flex bg-slate-950 flex-wrap py-8 px-0 md:px-12 sm:px-24 pr-0 items-center justify-center pt-32">
                <div className="w-full p-4 container">
                    <h2 className="posttitle text-white font-bold chancelorheading text-center">{post.title}</h2>

                    {/* <Image src={post.imageUrl} alt="Image Description" className="max-w-full h-auto w-full blogimg" /> */}
                </div>
            </div>
            <div className="flex bg-slate-950 flex-wrap px-0 md:px-12 sm:px-24 pr-0 items-center justify-center">
                <div className='container flex items-center justify-center'>
                    <div className="w-full p-4">
                        <div className="text-sm leading-6 flex justify-center items-center gap-4">
                            <Image src={post.author.authorimageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <p className="font-semibold text-white">
                                <span className="absolute inset-0" />
                                {post.author.name}<br></br>
                                {post.author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 container">
                    <div className="mx-auto flex flex-col md:flex-row sm:flex-row max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 lg:mx-0 lg:max-w-none">
                        <p className="mt-2 chancelorparagraph blogdesc text-black w-full sm:w-3/4 md:3/4">
                            {parse(post.description)}
                        </p>
                        <div className='w-full sm:w-1/4 md:1/4'>

                            <h3>Recent posts</h3>
                            {posts.map((recentPost) => (
                                <Link key={recentPost.id} href={`/${slugify(recentPost.title)}`} passHref>
                                    <article className="flex max-w-xl flex-col items-start justify-between gap-5">
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={recentPost.datetime} className="text-black">
                                                {recentPost.date}
                                            </time>
                                            <a
                                                href={recentPost.category.href}
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100"
                                            >
                                                {recentPost.category.title}
                                            </a>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <span className="absolute inset-0" />
                                                {recentPost.title}
                                            </h3>
                                            {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{recentPost.description}</p> */}
                                        </div>
                                        <div className="relative flex items-center">
                                            <Image src={recentPost.author.authorimageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <span className="absolute inset-0" />
                                                    {recentPost.author.name}
                                                </p>
                                                <p className="text-gray-600">{recentPost.author.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetail;
