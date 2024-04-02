# Scroll effect

- Clone the following https://github.com/colbyfayock/demo-landing-starter
- You will see its a simple page with the following sections

```jsx
import Head from 'next/head'

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Space Jelly</title>
        <meta name="description" content="Cosmic web dev tutorials that will shock you with joy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Space Jelly
          </h1>

          <p className={styles.subtitle}>
            Cosmic web dev tutorials that will shock you with joy!
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Latest Posts
          </h2>

          <ul className={styles.posts}>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/">
                How to Automatically Tag & Categorize Images Using AI with Google Vision & Cloudinary
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/">
                How to Authenticate Spotify Web API Requests in Next.js with Netlify API Auth
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/">
                How to Generate Personalized Social Media Cards for Landing Pages with Next.js & Cloudinary
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container>
          <h2 className={styles.heading}>
            Courses
          </h2>

          <ul className={styles.posts}>
            <li>
              <a href="https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c?af=atzgap">
                Create an eCommerce Store with Next.js and Stripe Checkout
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/levelupecommerce">
                Ecommerce on the Jamstack
              </a>
            </li>
            <li>
              <a href="https://fromdesignto.dev/">
                From Design to Development
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container>
          <h2 className={styles.heading}>
            Magic 🪄
          </h2>

          <p>🚀</p>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 className={styles.heading}>
            Have you scrolled down here yet? 🧐
          </h2>

          <p>IDK 🤷‍♂️</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Call to Action
          </h2>

          <p>Sign up now!</p>
        </Container>
      </Section>
    </Layout>
  )
}
```

Add useRef & useEffect 

```jsx
//Add neccessary Hooks
import {useRef,useEffect,useState} from 'react';

//Add the following code to track the visibility of myRef element

export default function Home() {
  const myRef=useRef();
  const [myElementIsVisible,setMyElementIsVisible]  = useState();
  console.log('myElementIsVisible',myElementIsVisible);

  useEffect(()=>{
    try{
      const observer = new IntersectionObserver((entries)=>{
        const entry  =entries[0];
        setMyElementIsVisible(entry.isIntersecting)
      })
      observer.observe(myRef.current)
    }
    catch(error){
      console.log(error)
    }
   observer.observe(myRef.current)
  })
  
  //myRef Element added below
  
  <Section backgroundColor="secondary">
        <Container>
          <h2  ref={myRef} className={styles.heading}>
            Have you scrolled down here yet? 🧐
          </h2>

          <p>IDK 🤷‍♂️</p>
        </Container>
      </Section>
```

Above method is effective , but there is a far more effective way of doing it by using the ‘react-observation-hook’ - linked https://www.npmjs.com/package/react-intersection-observer-hook 

Steps to add this

`npm install react-intersection-observer --save`

```jsx

import { useInView } from 'react-intersection-observer';
//Add import

  const { ref:myRef, inView:myElementIsVisible } = useInView();
  const { ref:rocketRef, inView:rocketIsVisible } = useInView();

 useEffect(()=>{
  console.log(`Element is visible: ${myElementIsVisible}  `);
  console.log(`Rocket is visible: ${rocketIsVisible}  `);
 },[myElementIsVisible,rocketIsVisible])

//Add ref attributes as below
<Section backgroundColor="primary">
        <Container>
          <h2 
           
          className={styles.heading}>
            Magic 🪄
          </h2>

          <p ref={rocketRef}><span className={styles.rocket}>🚀</span></p>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2  
          ref={myRef}
          className={styles.heading}>
            Have you scrolled down here yet? 🧐
          </h2>

          <p>IDK 🤷‍♂️</p>
        </Container>
      </Section>

```

Now when you scroll down you will see the visibility of each section changes to true.

Let’s add some animation to the rocket. As you can see we have already added a class to rocket element , let’s add the animation in Home.module.scss