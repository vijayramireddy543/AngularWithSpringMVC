package com.practice.controller

import com.practice.model.User
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.ModelAndView

import javax.xml.ws.Response

/**
 * @author Vijay.R ,
 * On 10/24/2019,
 * At 11:31 AM.
 */

@RestController
class UserRestController {

    @GetMapping(value = "/users", produces = "application/json")
    List<User> findUsers(){
        List<User> users = [new User('vijay','543','87774973494')]
    }
}
