import Image from 'next/image';
import React from 'react';
import { CgComment, CgShare } from 'react-icons/cg';
import { MdThumbUp } from 'react-icons/md';
const posts = [
  {
    _id: 'xyz',
    author: 'jahid',
    profile: '/images/Dj-Avila.jpg',
    created: '12-12-2022',
    content: {
      title: 'This is my blog site',
      description:
        'this website will be new way of communication. People can evove them and share their knowledge in a easy and efficient way.',
      image: '/images/Shishir.jpg',
      links: [{}],
    },
    reviews: {
      like: 12,
      comments: [
        {
          _id: 'za',
          author: 'jahid',
          message: 'great!',
        },
        {
          _id: 'ax',
          author: 'jahid',
          message: 'great!',
        },
      ],
    },
  },
  {
    _id: 'zxb',
    created: '12-12-2022',
    author: 'David',
    profile: '/images/Dj-Avila.jpg',
    content: {
      title: 'This is my blog site',
      description:
        'this website will be new way of communication. People can evove them and share their knowledge in a easy and efficient way.',
      image: '/images/Shishir.jpg',
      links: [{}],
    },
    reviews: {
      like: 12,
      comments: [
        {
          _id: 'za',
          author: 'jahid',
          message: 'great!',
        },
        {
          _id: 'ax',
          author: 'jahid',
          message: 'great!',
        },
      ],
    },
  },
];
const Post = () => {
  return (
    <div className='w-[500px] rounded-md border-2 p-2  bg-white'>
      {posts.length
        ? posts.map((post) => (
            <div key={post._id} className=''>
              <div className='flex justify-between items-center h-8 my-4'>
                <div>
                  <div className='flex justify-center items-center space-x-2'>
                    <Image
                      className='h-6 w-full rounded-full'
                      src={post.profile}
                      alt='profile'
                      height={1}
                      width={1}
                    ></Image>
                    <p className='font-bold text-sm'>{post.author}</p>
                  </div>
                  <p className='text-sm font-thin'> 3 jun,2022</p>
                </div>
              </div>
              <p className='text-lg'>{post.content.title}</p>

              <p className='text-sm font-light text-gray-900'>
                {post.content.description}
              </p>
              <div className='h-[200px] w-[500px] '>
                <Image
                  className='h-full w-full object-cover mt-2'
                  src={post.content.image}
                  alt='content'
                  width={500}
                  height={200}
                ></Image>
              </div>

              <div className='border-2 rounded-sm h-8 flex justify-around items-center'>
                <p className='flex cursor-pointer justify-center items-center space-x-2'>
                  {post.reviews.like} <MdThumbUp />
                </p>
                <p className='flex cursor-pointer justify-center items-center space-x-2'>
                  {post.reviews.comments.length} <CgComment />
                </p>
                <p>
                  <CgShare />
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Post;
