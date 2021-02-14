var c_hash_md2 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("MD2");
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
var c_hash_md5 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("MD5");
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
var c_hash_sha1 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("SHA-1");
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
var c_hash_sha224 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("SHA-224");
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
var c_hash_sha256 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("SHA-256");
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
var c_hash_sha384 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("SHA-384");
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
var c_hash_sha512 = `import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class app {
    
    public static class Hash{
        private MessageDigest md;
        public Hash(){
            try {
                md = MessageDigest.getInstance("SHA-512");
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