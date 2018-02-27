pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function add(int16 a, int16 b) public pure returns (int16) {
        return a + b;
    }
}

