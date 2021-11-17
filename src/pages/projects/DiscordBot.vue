<template>
  <Layout>
    <h1>Discord Bot</h1>
    <article>
      <p>
        In my spare time, I like to play games with my friends online and we use
        Discord to speak to each other. So I wanted to see if I could make a
        Discord bot for just our own enjoyment and this is how I developed and
        deployed it.
      </p>

      <h2>Register your Bot</h2>
      <p>
        Firstly, you need to create your bot on the
        <a
          href="https://discord.com/developers/applications"
          target="_blank"
          rel="noopener"
          >Discord site</a
        >
        . Once you have created your Discord 'Application' you should be able to
        see your public key, client ID and client secret. We will need these
        later.
      </p>

      <h2>Discord.Net</h2>
      <p>
        This is what I used to develop my Discord bot using C#. You can find the
        github for this nuget package
        <a
          href="https://github.com/discord-net/Discord.Net"
          target="_blank"
          rel="noopener"
          >here</a
        >. You will then need to create a new dotnet core console app and
        install the Discord.Net nuget package. I then followed this
        <a
          href="https://discord.foxbot.me/docs/guides/introduction/intro.html"
          target="_blank"
          rel="noopener"
          >guide</a
        >
        to get a simple bot running locally on my own PC.
      </p>

      <h2>Deploying your Bot</h2>
      <p>
        There are a lot of options out there for this but I'd like to share the
        provider I used for this, DigitalOcean. You can pay $5 a month for their
        cheapest tier Linux VPS running Ubuntu. Then you need to build your
        Discord bot for the Linux environment. I was using Ubuntu-20.10 and
        dotnet core 3.1 so you may have to swap these values depending on what
        you are using. Run this command to in your projects directory
        <span class="code-snippet"
          >dotnet publish -c release -r ubuntu.16.04-x64</span
        >
        Now we have built our Discord bot for Linux all we have to do now is
        copy it over to our server and run it. To copy the built files run the
        following command, make sure to input your own user and ip for your
        Linux server
        <span class="code-snippet"
          >scp -r
          YourProjectDirectory/src/bin/release/netcoreapp3.1/ubuntu.20.10-x64/publish
          user@IPAddress:/YourBotName</span
        >
        This will copy all the files to the root directory of your server and
        place them in a new directory with the name of your bot. Next we need to
        add the permissions to run the app
        <span class="code-snippet">chmod 777 ./appname</span>
        Then run the app as a background process so that it does not stop once
        you leave the terminal
        <span class="code-snippet">nohup ./appname &</span>
      </p>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Discord bot",
  },
};
</script>

<style>
iframe {
  border: none;
}
</style>