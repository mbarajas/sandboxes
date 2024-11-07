package main

import (
  "fmt"
  "encoding/json"
  "net/http"
)

type Person struct{
  name string
  age int
}

type Human interface {
  greet()
}

type TheNumber int

type theFunction func(int, int) int

func (p Person) greet() {
  fmt.Println("Hello, my name is", p.name)
}

func deferTest() {
  defer fmt.Println("deferred")
  fmt.Println("not deferred")
}

func theFunctionTest(f theFunction) {
  fmt.Println(f(2, 3))
}

func add(a int, b int) int {
  return a + b
}

func closureTest() {
  multiply := func(a int, b int) int {
    return a * b
  }
  fmt.Println(multiply(2, 3))
}

func pointerTest(x *int) {
  *x = 0
}

func ternaryTest() {
  age := 20
  if age >= 18 {
    fmt.Println("Adult")
  } else {
    fmt.Println("Not adult")
  }
}

func fizzBuzz(n int) {
  for i := 1; i <= n; i++ {
    if i % 3 == 0 && i % 5 == 0 {
      fmt.Println("FizzBuzz")
    } else if i % 3 == 0 {
      fmt.Println("Fizz")
    } else if i % 5 == 0 {
      fmt.Println("Buzz")
    } else {
      fmt.Println(i)
    }
  }
}

func callAPI() {
  resp, err := http.Get("https://jsonplaceholder.typicode.com/todos/1")
  if err != nil {
    fmt.Println(err)
  }
  defer resp.Body.Close()

  var data map[string]interface{}
  json.NewDecoder(resp.Body).Decode(&data)

  finalData, _ := json.MarshalIndent(data, "", "  ")

  fmt.Println("API Response:", string(finalData))
}

func typeAssertion(params interface{}) {
  switch v := params.(type) {
  case string:
    fmt.Println("String:", v)
  case int:
    fmt.Println("Int:", v)
  default:
    fmt.Println("Unknown type")
  }
}

func forLoopTest(params []int) {
  for i := 0; i < len(params); i++ {
    fmt.Println(params[i])
  }

  for i, v := range params {
    fmt.Println(i, v)
  }

  for _, v := range params {
    fmt.Println(v)
  }
}

func main() {
  fmt.Println("Hello, World!")
  p := Person{"John", 30}
  p.greet()

  deferTest()

  fmt.Println(add(1, 2))

  var n TheNumber = 10
  fmt.Println(n)

  theFunctionTest(add)
  ternaryTest()

  x := 5
  pointerTest(&x)
  fmt.Println(x)

  callAPI()

  typeAssertion("Hello")
}


