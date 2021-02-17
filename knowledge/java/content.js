function t_1(a){
    return `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("` + a + `");
            } catch (NoSuchAlgorithmException e){e.printStackTrace();}  
        }
        public String encrypt(String input) {
            md.update(input.getBytes());
            byte[] byteData = md.digest();
            return String.format("%0" + (byteData.length << 1) + "x", new Object[] { new BigInteger(1, byteData) });
        }   
        public Boolean match(String raw, String encrypted) {
            if (encrypt(raw).equals(encrypted)) return true;
            return false;
        }    
    }
    
    public static void main(String[] args){
        Hash hash = new Hash();
        String encrypted = hash.encrypt("password");
        System.out.println(encrypted);
        if (hash.match("password",encrypted)){
            System.out.println("password match");
        } else {
            System.out.println("password don't match");
        }
    }
    
}
`;
}