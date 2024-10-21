package main

import "fmt"

type Person struct{
  name string
  age int
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

func main() {
  fmt.Println("Hello, World!")
  p := Person{"John", 30}
  p.greet()

  deferTest()

  fmt.Println(add(1, 2))

  var n TheNumber = 10
  fmt.Println(n)

  theFunctionTest(add)
}


