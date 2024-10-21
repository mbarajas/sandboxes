class Solution {
  public static String minRemoveToMakeValid(String s) {

    StringBuilder result = new StringBuilder();
    StringBuilder sb = new StringBuilder();


    int n = s.length();
    int op = 0;

    for(int i = 0;i<n;i++){
      if(s.charAt(i)=='(')
      {
        op++;
      }
      if(s.charAt(i)==')')
      {
        if(op==0) continue;
        op--;
      }
      sb.append(s.charAt(i));
    }

    for(int i = sb.length()-1;i>=0;i--)
    {

      if(sb.charAt(i)=='(' && op>0)
      {
        op--;
        continue;
      }
      result.append(sb.charAt(i));
    }

    return result.reverse().toString();

  }

  public static void main(String[] args) {
    System.out.println(Solution.minRemoveToMakeValid("lee(t(c)o)de)"));
  }
}



