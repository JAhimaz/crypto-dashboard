# Internship Interview Questions
*Please include explanation along with your answers.*

1. Please describe yourself using JSON (include your internship start/end date, your current location).

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

8. Share with us one book that has changed your perspective in life. How did it change your life?

9. What is the thing you believe in that is true, that most people disagree with?

10. What are your thoughts on the subject of Arts and Humanities?

---
# Simple Coding Assessment

Build a Cryptocurrency Market dashboard showing market data.

requirement:
1. using the API endpoints found in https://www.coingecko.com/en/api, build a cryptocurrency market dashboard page.
2. The page should be able to list at least 20 coins.
3. The page should show price, volume, name, symbol of the coin.
4. The page should show the graph of 7 days data, using the **sparkline** returned from api. For example sparkline data can be obtained using [https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true](https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true) or [https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true)
5. The page should allow user to "favorite" coins.
6. build another page "favorite", to only show the favorite coins.
5. **(bonus)** The page should allow user to switch currency. The price and volume should display the number in the currency selected. Use this endpoint to achieve the goal https://api.coingecko.com/api/v3/exchange_rates
6. **(bonus)** Host this on a website, or a mobile app.
7. We will schedule a video call with you should we decide to proceed with your interview. You must be able to demo your submission to us.

---
# Submission instruction

1. Fork this repo.
2. In your own git repo, create a new branch, and work on the Assessment.
3. Once you are done, create a merge request (or pull request) against your master branch
4. Share the link and access to your gitlab repo in the job application email.

Note: Do not create Merge Request against this repository, else your submission will be automatically disqualified.
