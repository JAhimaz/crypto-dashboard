# Internship Interview Questions
*Please include explanation along with your answers.*

1. Please describe yourself using JSON (include your internship start/end date).

2. Tell us about a newer (less than five years old) web technology you like and why?

3. In Java, the maximum size of an Array needs to be set upon initialization. Supposedly, we want something like an Array that is dynamic, such that we can add more items to it over time. Suggest how we can accomplish that (other than using ArrayList)?

4. Explain this block of code in Big-O notation.
    ```
    void sampleCode(int arr[], int size)
    {
        for (int i = 0; i < size; i++)
        {
            for (int j = 0; j < size; j++)
            {
                printf("%d = %d\n", arr[i], arr[j]);
            }
         }
    }
    ```

5. One of our developers built a page to display market information for over 500 cryptocurrencies in a single page. After several days, our support team started receiving complaints from our users that they are not able to view the website and it takes too long to load. What do you think causes this issue and suggest at least 3 ideas to improve the situation. 

6. In Javascript, What is a "closure"? How does JS Closure works?

7. In Javascript, what is the difference between var, let, and const. When should I use them?

---
# Simple Coding Assessment

Build a URL shortener service (refers to https://bitly.com)

requirement:
1. build a method/function where it takes in an URL (example www.coingecko.com), and the output is a shortened URL
2. the length of the shortened URL must be unique.
3. build a method/function where it takes in the shortened URL in #1, and the output is the full URL.
4. you must be able to demo your code to us.
5. **(bonus point)** use Ruby On Rails as the language/framework.
6. **(bonus point)** host it on a website.

---
# Submission instruction

1. fork this repo
2. creates a Merge Request against the master branch (after completion)
3. grant repo access (collaborators) to jack@coingecko.com and tmlee@coingecko.com
