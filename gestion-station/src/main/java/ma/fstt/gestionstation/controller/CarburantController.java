package ma.fstt.gestionstation.controller;

import ma.fstt.gestionstation.entity.Carburant;
import ma.fstt.gestionstation.service.CarburantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carburants")
@CrossOrigin(origins = "*")
public class CarburantController {

    private final CarburantService carburantService;

    public CarburantController(CarburantService carburantService) {
        this.carburantService = carburantService;
    }

    @GetMapping
    public List<Carburant> getAllCarburants() {
        return carburantService.getAllCarburants();
    }

    @GetMapping("/{id}")
    public Carburant getCarburant(@PathVariable Long id) {
        return carburantService.getCarburantById(id);
    }

    @PostMapping
    public Carburant createCarburant(@RequestBody Carburant carburant) {
        return carburantService.saveCarburant(carburant);
    }

    @PutMapping("/{id}")
    public Carburant updateCarburant(@PathVariable Long id, @RequestBody Carburant carburant) {
        return carburantService.updateCarburant(id, carburant);
    }

    @DeleteMapping("/{id}")
    public void deleteCarburant(@PathVariable Long id) {
        carburantService.deleteCarburant(id);
    }
}
