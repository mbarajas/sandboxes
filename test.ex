#Elixir call api and display contents

defmodule Test do
  def call_api do
    {:ok, response} = HTTPoison.get("https://jsonplaceholder.typicode.com/posts")
    IO.inspect response.body
  end
end

Test.call_api()
